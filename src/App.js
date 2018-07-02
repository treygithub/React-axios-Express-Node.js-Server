import React, { Component } from 'react';
import './App.css';
import './components/DataComponentLoop/Component.css'
import './components/Loader/Loader.css';
import './components/Nav/Nav.css';
import './components/Footer/Footer.css';
import './components/Header/Header.css'
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import InstanceLoop from './components/DataComponentLoop/Component';
import Header from "./components/Header/Header";
// import Post from "./components/Post/Post"

class App extends Component {

  render() {

    return (

      <div className="App">
        <Nav />
        <Header />
        <InstanceLoop />
        {/* <Post /> */}
        <Footer />
      </div>
    );
  }
}

export default App;