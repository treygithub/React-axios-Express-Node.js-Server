import React, {Component} from 'react';
import Header2 from './FunctionalComponent'


class Header extends Component {

  render() {

    return (
      <div>
            <header className="head">
                <h2 className="head-h2">Welcome to Full CRUD</h2>
                <Header2 className="head-h3">May the Code be with you...</Header2>
            </header>
      </div>
    );

  }
}

export default Header;