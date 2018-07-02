import React, { Component } from 'react';


class Nav extends Component {

  render() {

    return (
      <div>


         <div className="bs-example">
        <nav className="navbar navbar-default">
          
            <div className="navbar-header">
                <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a href="google.com" className="navbar-brand">Robert H. Media</a>
            </div>
           
            <div id="navbarCollapse" className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <li>
                        <i className="fas fa-home"></i>
                    </li>
                    <li id="home" className="active">
                        <a href="">Home</a>
                    </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <i className="far fa-envelope"></i>
                    </li>
                    <li>
                        <a target="_blank" href="contact.html">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
      </div>
    );

  }
}

export default Nav;