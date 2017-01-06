var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is the default message'
    }
  },
  render: function () {
    var name = this.props.name
    var message = this.props.message
    return (
      <div>
        <h1>Hello {name}</h1>
        <p>{message}</p>
      </div>
    )
  }
})
 var firtsName = 'Rodrigo'
 var message = 'This is a message'
  ReactDOM.render(
    <Greeter name={firtsName} message={message}/>,
    document.getElementById('app')
  )
