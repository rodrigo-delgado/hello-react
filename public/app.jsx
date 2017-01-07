//Every react Component needs a render method
var React = require('react')
var ReactDOM = require('react-dom')
var Greeter = require('Greeter')
//GreeterForm Component


 var firtsName = 'Rodrigo'

  ReactDOM.render(
    <Greeter name={firtsName} />,
    document.getElementById('app')
  )
