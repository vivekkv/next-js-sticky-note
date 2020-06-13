import ActionTypes, { State } from './type';

function reducer(state: State, action: ActionTypes): State {

    switch (action.type) {

        case 'SET_POSTS':
            return {
                posts: action.posts
            }

        case 'ON_LOG_OFF':
            return {
                posts: []
            }
            
        default:
            return state;
    }
}

export default reducer