import React, { Component } from 'react';
import Header2 from '../Header/FunctionalComponent'


class Footer extends Component {

  render() {

    return (
      <div>
        <footer>
                    <p>NewJack Web Devlopment, Copyright &copy; 2018 || Dev-Mtn</p>
            <Header2 className="head-h3">May the code be with you...</Header2>
        </footer>
      </div>
    );

  }
}

export default Footer;