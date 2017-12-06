var tkl = require( './index.js' )

tkl.getVehicleActivity( function ( err, busses ) {
  var list = Object.keys( busses ).map( function ( id ) {
    return busses[ id ]
  } )

  var bus = list[ 0 ]

  console.log( bus )
} )
