//Every react Component needs a render method

//Greeter Message Component
var GreeterMessage = React.createClass({
  render: function () {
    var name = this.props.name
    var message = this.props.message
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    )
  }
})
//GreeterForm Component
var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault()

    var updates = {}
    var name = this.refs.name.value
    var message = this.refs.message.value

    if (name.length > 0) {
      this.refs.name.value = ''
      updates.name = name
    }
    if (message.length > 0 ) {
      this.refs.message.value = ''
      updates.message = message
    }
    this.props.onNewName(updates)
  },
  render: function () {
    return (
        <form onSubmit={this.onFormSubmit}>
          <input type='text' ref='name' placeholder='Enter Name' /><br />
          <textarea ref='message' placeholder='Enter Message'></textarea>
          <button>Set Name</button>
        </form>
    )
  }
})
//Greeter Component
var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is the default message'
    }
  },
  getInitialState: function () {
    return {
      name: this.props.name,
      message: this.props.message
    }
  },

  handleNewName: function (updates) {
    this.setState(updates)
  },
  render: function () {
    var name = this.state.name
    var message = this.state.message

    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewName={this.handleNewName}/>
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
