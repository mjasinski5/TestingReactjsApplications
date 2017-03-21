import React, { Component } from 'react';

class Menu extends Component {
  render() {
    const { isLoggedIn, userName, logout } = this.props;

    return (
      <ul className="menu">
        <li> First Category</li>
        <li> Second Category </li>
        { isLoggedIn &&
          <ul className="additionalElement">Third ({userName})
            <button className="logoutButton" onClick={logout}> Logout </button>
          </ul>
        }
      </ul>
    );
  }
}

export default Menu;
