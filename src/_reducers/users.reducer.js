import { userConstants } from '../_constants/user.constants';

export function profile(state = {}, action) {
    switch (action.type) {
    case userConstants.GETPROFILE_REQUEST:
        return {
        loading: true
        };
    case userConstants.GETPROFILE_SUCCESS:
        return {
            loading: false,
            data: action.profile
        };
    case userConstants.GETPROFILE_FAILURE:
        return { 
        error: action.error
        };
    default:
        return state
    }
}