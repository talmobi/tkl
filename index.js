var dasu = require( 'dasu' )

var api = {}

module.exports = api

api.getVehicleActivity = getVehicleActivity


function log () {
  // console.log.apply( this, arguments )
}

function getVehicleActivity ( callback ) {
  if ( typeof callback !== 'function' ) {
    throw new Error( 'no callback function provided for getVehicleActivity' )
  }

  // http://data.itsfactory.fi/journeys/api/1/vehicle-activity
  var params = {
    protocol: 'http',
    host: 'data.itsfactory.fi',
    path: '/journeys/api/1/vehicle-activity'
  }

  dasu.req(
    params,
    function ( err, res, body ) {
      if ( err ) return callback( err )

      try {
        log( 'status: ' + res.status )

        var busses = {}

        var json = JSON.parse( body )

        var arr = json.body // array of busses

        log( ' arr.length: %s', arr.length )

        for ( var i = 0; i < arr.length; ++i ) {
          var data = arr[ i ]
          var mvj = data.monitoredVehicleJourney
          var line = mvj.lineRef
          var loc = mvj.vehicleLocation
          var bearing = mvj.bearing
          var speed = mvj.speed
          var id = mvj.vehicleRef
          var delay = mvj.delay

          var delayMs = 0

          var ss = delay.slice( delay.lastIndexOf( 'M' ) + 1, delay.lastIndexOf( 'S' ) )
          delayMs = parseFloat( ss ) * 100

          busses[ id ] = busses[ id ] || {}
          var o = busses[ id ]
          o.line = line
          o.loc = loc
          o.bearing = bearing
          o.speed = speed
          o.id = id
          o.delay = delay
          o.delayMs = delayMs || 0
        } // for loop

        var keys = Object.keys( busses )
        log( 'busses length: %s', keys.length )

        callback( null, busses )
      } catch ( err ) {
        callback( err )
      }
    }
  )
}
