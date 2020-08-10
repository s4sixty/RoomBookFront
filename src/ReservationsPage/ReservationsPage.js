import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {Container, Jumbotron, Button, Table} from 'react-bootstrap';
import {Header} from '../_components/Header';
import { userActions } from '../_actions/user.actions';
import { authHeader } from '../_helpers/auth-header';

class ReservationsPage extends React.Component {

    constructor(props) {
        super();
        this.state = {
            reservations: []
        }
    }

    componentDidMount() {
        const requestOptions = {
            method: 'GET',
            headers: authHeader()
        };
        this.props.dispatch(userActions.getProfile());
        fetch(`${process.env.REACT_APP_apiUrl}/reservations`, requestOptions)
            .then(res => res.json())
            .then(reservations => this.setState({ 'reservations': reservations} ))
    }

    render() {
        const {user, profile } = this.props;
        console.log(profile.data);
        
        if(typeof profile.data !== 'undefined') {
            console.log(profile.data.firstName)
        return (
            <div className="h-100">
            <Header profile={profile}></Header>
            <div className="h-100">
                <Container>
                <h2>Your reservations</h2>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>RoomId</th>
      <th>Day</th>
      <th>Start At</th>
      <th>End At</th>
    </tr>
  </thead>
  <tbody>
  { this.state.reservations.map((item, index) =>
      <tr className="trow"> 
      <td key={index}>  {item.roomID} </td> 
      <td key={index}>  {item.beginTime} </td> 
      <td key={index}>  {item.beginTime} </td>
      <td key={index}>  {item.endTime} </td>  
    </tr>
   ) }
  </tbody>
</Table>
</Container>
            </div>
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

const connectedReservationsPage = connect(mapStateToProps)(ReservationsPage);
export { connectedReservationsPage as ReservationsPage };