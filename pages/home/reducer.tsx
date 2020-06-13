import ActionTypes, { State } from './type';

function reducer(state: State, action: ActionTypes): State {

    switch (action.type) {

        case 'SET_USERS':
            return {
                ...state,
                users: action.users,
            }

        case "ON_LOGIN_SUCCESS":
        case 'ON_LOGIN_FAILED':
            return {
                ...state,
                message: "Login Failed"
            }
            
        default:
            return state
    }
}

export default reducer