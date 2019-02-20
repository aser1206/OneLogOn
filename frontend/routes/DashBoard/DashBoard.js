import React, { Component } from 'react';
import { Button, Dropdown, Navbar } from 'react-bootstrap';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import userlogo from 'assets/user.png';
import logo from 'assets/logo-white.png';
import HamburgerButton from 'common/HamburgerButton/HamburgerButton';
import s from './DashBoard.css';

import Settings from 'routes/Settings/Settings';
import ManageUsers from 'routes/ManageUsers/ManageUsers';
import Statistics from 'routes/Statistics/Statistics';
import Kiosk from 'routes/Kiosk/Kiosk';

const dashboardRoutes = [
  { id: 0, name: 'Settings', path: 'settings', component: Settings },
  { id: 1, name: 'ManageUsers', path: 'manage', component: ManageUsers },
  { id: 2, name: 'Statistics', path: 'statistics', component: Statistics },
  { id: 3, name: 'Kiosk Mode', path: 'kiosk', component: Kiosk },
];

class DashBoard extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      username: 'Admin',
    };
  }

  openSideMenu = () => {
    document.getElementById('sideMenu').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
  };

  closeSideMenu = () => {
    document.getElementById('sideMenu').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
  };

  handleLogout = () => {
    this.props.history.push('/logout');
  };

  render() {
    return (
      <div className={s.root}>
        <Navbar className={s.navbar}>
          <HamburgerButton onClick={this.openSideMenu} />
          <Navbar.Brand>
            <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top" />
          </Navbar.Brand>
          <Navbar.Brand>
            <p className={s.title}>OneLogOn</p>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Dropdown>
              <Dropdown.Toggle variant="link" id="dropdown-basic" className={s.dropDownToggle}>
                <img className={s.profileImage} src={userlogo} alt="user pic" />
                {this.state.username}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={this.handleLogout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Navbar>

        <div id="sideMenu" className={s.sideNav}>
          <button className={s.btnClose} onClick={this.closeSideMenu}>
            &times;
          </button>
          {dashboardRoutes.map(route => {
            return (
              <NavLink key={route.id} to={`${this.props.url}/${route.path}`}>
                <Button variant="outline-primary" className={s.sideNavItem}>
                  {route.name}
                </Button>
              </NavLink>
            );
          })}
        </div>

        <div id="main" className={s.main}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default withRouter(DashBoard);
