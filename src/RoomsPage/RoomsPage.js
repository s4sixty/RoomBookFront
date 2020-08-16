import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {Form, Col} from 'react-bootstrap';
import {Header} from '../_components/Header';
import { userActions } from '../_actions/user.actions';
import { authHeader } from '../_helpers/auth-header';
import './RoomsPage.css';

class RoomsPage extends React.Component {
    constructor(props) {
        super();
        this.state= {
            rooms: [],
            roomId: '',
            day: '',
            beginTime: '00:00',
            endTime: '01:00'
        }
    }

    componentDidMount() {
        const requestOptions = {
            method: 'GET',
            headers: authHeader()
        };
        this.props.dispatch(userActions.getProfile());
        fetch(`${process.env.REACT_APP_apiUrl}/rooms`, requestOptions)
            .then(res => res.json())
            .then(rooms => this.setState({ 'rooms': rooms, 'roomId': rooms[0].Id }))
    }

    handleSubmit =(e) => {
        e.preventDefault();
        console.log(this.state.day);
        console.log(this.refs.roomRef.value);
        console.log(this.refs.beginTimeRef.value);
        console.log(this.refs.endTimeRef.value);

        var roomId = this.refs.roomRef.value;
        var beginTime = this.state.day+"T"+this.refs.beginTimeRef.value;
        var endTime = this.state.day+"T"+this.refs.endTimeRef.value;

        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({ roomId, beginTime, endTime}),
            headers: authHeader(),
        };

        return fetch(`${process.env.REACT_APP_apiUrl}/reservations`, requestOptions)
        .then(this.handleResponse)
        .then(res => {
            console.log(res)
            return res;
        });
    }
    handleResponse = (response) => {
        //console.log(response)
        return response.text().then(text => {
            const data = text && JSON.parse(text);
            if (!response.ok) {
                if (response.status === 401) {
                    // auto logout if 401 response returned from api
                    //logout();
                    window.location.reload(true);
                }
    
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
    
            return data;
        });
    }

    handleDayChange = (e) => {
        this.setState({day: e.target.value});
    }

    handleStartTimeChange = (e) => {
        this.setState({beginTime: e.target.value});
    }

    handleEndTimeChange = (e) => {
        this.setState({endTime: e.target.value});
    }

    render() {
        const {user, profile } = this.props;
        
        return (
            <div>
            <Header ></Header>
            <div className="container">
                <div className="row">
                <div className="col-sm-12 col-md-10 col-lg-10 mx-auto">
                    <div className="card card-signin my-5">
                    <div className="card-body">
                        <h5 className="card-title text-center">Make a reservation</h5>
                            <form name="form" onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formRoom">
                            <Form.Label>Room</Form.Label>
                            <Form.Control as="select" ref="roomRef">
                            { this.state.rooms.map((room) =>
                                <option key={room.id} value={room.id}  >
                                {room.name}</option>
                                ) }
                            </Form.Control>
                            </Form.Group>
                            <Form.Row>
                            <Form.Group as={Col} controlId="formDay" value={this.state.day} onChange={this.handleDayChange}>
                                <Form.Label>Day</Form.Label>
                                <Form.Control type="date"/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formBeginTime">
                                <Form.Label>Start at</Form.Label>
                                <Form.Control as="select" defaultValue="00:00" ref="beginTimeRef">
                                    <option key="0" value="00:00">00:00</option>
                                    <option key="1" value="01:00">01:00</option>
                                    <option key="2" value="02:00">02:00</option>
                                    <option key="3" value="03:00">03:00</option>
                                    <option key="4" value="04:00">04:00</option>
                                    <option key="5" value="05:00">05:00</option>
                                    <option key="6" value="06:00">06:00</option>
                                    <option key="7" value="07:00">07:00</option>
                                    <option key="8" value="08:00">08:00</option>
                                    <option key="9" value="09:00">09:00</option>
                                    <option key="10" value="10:00">10:00</option>
                                    <option key="11" value="11:00">11:00</option>
                                    <option key="12" value="12:00">12:00</option>
                                    <option key="13" value="13:00">13:00</option>
                                    <option key="14" value="14:00">14:00</option>
                                    <option key="15" value="15:00">15:00</option>
                                    <option key="16" value="16:00">16:00</option>
                                    <option key="17" value="17:00">17:00</option>
                                    <option key="18" value="18:00">18:00</option>
                                    <option key="19" value="19:00">19:00</option>
                                    <option key="20" value="20:00">20:00</option>
                                    <option key="21" value="21:00">21:00</option>
                                    <option key="22" value="22:00">22:00</option>
                                    <option key="23" value="23:00">23:00</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formEndTime">
                                <Form.Label>End at</Form.Label>
                                <Form.Control as="select" defaultValue="01:00" ref="endTimeRef">
                                    <option key="0" value="00:00">00:00</option>
                                    <option key="1" value="01:00">01:00</option>
                                    <option key="2" value="02:00">02:00</option>
                                    <option key="3" value="03:00">03:00</option>
                                    <option key="4" value="04:00">04:00</option>
                                    <option key="5" value="05:00">05:00</option>
                                    <option key="6" value="06:00">06:00</option>
                                    <option key="7" value="07:00">07:00</option>
                                    <option key="8" value="08:00">08:00</option>
                                    <option key="9" value="09:00">09:00</option>
                                    <option key="10" value="10:00">10:00</option>
                                    <option key="11" value="11:00">11:00</option>
                                    <option key="12" value="12:00">12:00</option>
                                    <option key="13" value="13:00">13:00</option>
                                    <option key="14" value="14:00">14:00</option>
                                    <option key="15" value="15:00">15:00</option>
                                    <option key="16" value="16:00">16:00</option>
                                    <option key="17" value="17:00">17:00</option>
                                    <option key="18" value="18:00">18:00</option>
                                    <option key="19" value="19:00">19:00</option>
                                    <option key="20" value="20:00">20:00</option>
                                    <option key="21" value="21:00">21:00</option>
                                    <option key="22" value="22:00">22:00</option>
                                    <option key="23" value="23:00">23:00</option>
                                </Form.Control>
                            </Form.Group>
                            </Form.Row>
                                <div className="form-group">
                                    <button className="btn btn-primary" type="submit">Book this room</button>
                                </div>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
        ) 
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

const connectedRoomsPage = connect(mapStateToProps)(RoomsPage);
export { connectedRoomsPage as RoomsPage };