#  TKL - simple and incomplete tkl api

## Simple to use
```bash
var tkl = require( 'tkl' )
tkl.getVehicleActivity( function ( err, busses ) {
  var list = Object.keys( busses ).map( function ( id ) {
    return busses[ id ]
  } )

  var bus = list[ 0 ]

  console.log( bus ) // output
} )
```

## sample output
```js
{
  line: '15',
  loc: { longitude: '23.7603687', latitude: '61.4952483' },
  bearing: '74.0',
  speed: '18.0',
  id: 'TKL_48',
  delay: 'P0Y0M0DT0H7M53.000S',
  delayMs: 3500
}
```

# About
Old code for an old prototype I decided to wrap into an npm module.

# Why
To simplify communication with the public API

# How
Using the public [Journeys API](http://wiki.itsfactory.fi/index.php/Journeys_API#REST_styled_API)

# Alternatives
Haven't looked if there are alternatives -- there probably are. Or just
simply use the public Journeys API directly :)

# Test
```bash
npm test
```
