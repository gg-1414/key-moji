import React, {Component} from 'react'

export default class Signup extends Component {

  constructor() {
    super()
    this.state = {
      name: '',
      username: '',
      password: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    console.log(this.state)
    event.preventDefault()
    const user = {user: this.state}
    if (!!this.state.name && !!this.state.username && !!this.state.password) {
      fetch('http://localhost:3000/users/', {
         method: "POST",
         headers: {
            "Content-Type": "application/json; charset=utf-8",
         },
         body: JSON.stringify(user)
      })

    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit} >
          <label>Name: </label>
          <input type="text" onChange={this.handleChange} name="name"></input><br />
          <label>Username: </label>
          <input type="text" onChange={this.handleChange} name="username"></input><br />
          <label>Password: </label>
          <input type="password" onChange={this.handleChange} name="password"></input><br />
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}
