import { roomsConstants } from '../_constants/rooms.constants';

export function rooms(state = {}, action) {
    switch (action.type) {
    case roomsConstants.GETROOMS_REQUEST:
        return {
            loading: true
        };
    case roomsConstants.GETROOMS_SUCCESS:
        return {
            loading: false,
            rooms: action.rooms
        };
    case roomsConstants.GETROOMS_FAILURE:
        return { 
            error: action.error
        };
    default:
        return state
    }
}