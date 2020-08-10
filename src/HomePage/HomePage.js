import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {Container, Jumbotron, Button} from 'react-bootstrap';
import {Header} from '../_components/Header';
import './HomePage.css';
import { userActions } from '../_actions/user.actions';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getProfile());
        //console.log(this.props);
    }

    render() {
        const {user, profile } = this.props;
        //console.log(profile.data);
        
        if(typeof profile.data !== 'undefined') {
            //console.log(profile.data.firstName)
        return (
            <div className="h-100">
            <Header profile={profile}></Header>
            <div className="h-100">
            <Jumbotron fluid className="h-100">
                <h1 className="mt-5">RoomBook</h1>
                <h3 className="mt-5">
                Find the best rooms for you and your team for meetings
                </h3>
                <Button variant="dark" className="mt-5">Check our catalog</Button>
            </Jumbotron>
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

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };