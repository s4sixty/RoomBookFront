import { userConstants } from '../_constants/user.constants';
import { userService } from '../_services/user.service';
import { alertActions } from '.';
import { history } from '../_helpers/history';

export const userActions = {
    login,
    logout,
    getProfile
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function getProfile() {

    return dispatch => {
        dispatch(request());

        userService.getProfile()
            .then(
                profile => { dispatch(success(profile)); },
                error => { 
                    console.log(error)
                    dispatch(failure(error));
                    dispatch(alertActions.error(error))
                }
            );
    };


    function request() { return { type: userConstants.GETPROFILE_REQUEST } }
    function success(profile) { return { type: userConstants.GETPROFILE_SUCCESS, profile } }
    function failure(error) { return { type: userConstants.GETPROFILE_FAILURE, error } }
}