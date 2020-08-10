import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {Navbar, Nav} from 'react-bootstrap';

import { userActions } from '../_actions/user.actions';

class Header extends React.Component {

    render() {
        const {user, profile } = this.props;
        //console.log(profile.data);
        
        if(typeof profile.data !== 'undefined') {
            //console.log(profile.data.firstName)
        return (
            <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>RoomBook</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link as={Link} to="/rooms">Rooms</Nav.Link>
                <Nav.Link as={Link} to="/reservations">Reservations</Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link href="#deets" disabled>Hi {profile.data.firstName} !</Nav.Link>
                <Nav.Link to="/logout" eventKey={2} href="/login" >
                    Logout
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            
          </div>
        ) 
        } else {
            return <h1>Loading ...</h1>;
        }
    };
    
}

function mapStateToProps(state) {
    const { profile, authentication } = state;
    const { user } = authentication;
    return {
        user,
        profile
    };
}

const connectedHeader = connect(mapStateToProps)(Header);
export { connectedHeader as Header };