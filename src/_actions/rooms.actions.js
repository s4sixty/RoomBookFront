import { roomsConstants } from '../_constants/rooms.constants';
import { roomsService } from '../_services/rooms.service';
import { alertActions } from '.';
import { history } from '../_helpers/history';

export const roomsActions = {
    getRooms
};

function getRooms() {
    return dispatch => {
        dispatch(request());

        roomsService.getRooms()
            .then(
                rooms => { 
                    console.log(rooms);
                    dispatch(success(rooms));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request() { return { type: roomsConstants.GETPROOMS_REQUEST } }
    function success(rooms) { return { type: roomsConstants.GETPROOMS_SUCCESS, rooms } }
    function failure(error) { return { type: roomsConstants.GETPROOMS_FAILURE, error } }
}