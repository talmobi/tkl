var path = require( 'path' )

var test = require( 'tape' )

var tkl = require( path.join( __dirname, '../index.js' ) )

test( 'get tkl vehicle activity', function ( t ) {
  tkl.getVehicleActivity( function ( err, busses ) {
    t.error( err )

    var list = Object.keys( busses ).map( function ( id ) {
      return busses[ id ]
    } )

    t.ok( list.length > 0 )

    list.forEach( function ( bus ) {
      t.ok( bus.id )
      t.ok( bus.line > 0 )

      t.ok( bus.loc )

      t.ok( bus.loc.longitude > 20 )
      t.ok( bus.loc.longitude < 30 )

      t.ok( bus.loc.latitude > 60 )
      t.ok( bus.loc.latitude < 70 )

      t.ok( bus.bearing >= 0 )
      t.ok( bus.bearing <= 360 )

      t.ok( bus.speed >= 0 )
      t.ok( bus.speed <= 150 )

      t.ok( bus.delay )
      t.ok( bus.delayMs >= 0 )
      t.ok( bus.delayMs < ( 1000 * 60 * 5 ) ) // delay
    } )

    t.end()
  } )
} )
