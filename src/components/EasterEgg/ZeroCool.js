import React, { Component } from 'react';
import axios from 'axios'
import User from './UserForm'



//just for fun


class FrontEndApiCal extends Component {
  constructor(){
    super();
    this.state={
      repos:null
    }
  }
  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    axios.get(` https://api.github.com/users/${user}`).then((res) => {
      console.log(res)
      const repos = res.data.public_repos;
      this.setState({repos})
      console.log(repos)
    })
  }
  render() {

    return (
      <div className="App">
          <h3>GitHub Repo</h3>
        <User getUser={this.getUser} />
        {this.state.repos ? <h4>Number of repos: {this.state.repos}</h4> : <h4>Enter User Name here</h4>}
      </div>
    );
  }
}

export default FrontEndApiCal;
