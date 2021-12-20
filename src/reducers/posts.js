import { 
    GET_POST, 
    ADD_POST, 
    EDIT_POST, 
    REMOVE_POST, 
    ADD_COMMENT, 
    REMOVE_COMMENT, 
    UPDATE_VOTES
} from '../actions/types';


export default function rootReducer(state={}, action) {
    switch (action.type) {

        case GET_POST: { 
            
            return { ...state, [action.post.id]: action.post };
        }

        case ADD_POST: { 
            
            return { ...state, [action.post.id]: { ...action.post, comments: [] } };
        }

        case EDIT_POST: { 
            
            return {...state, [action.post.id]: { ...action.post, comments: state[action.post.id].comments } };
        }

        case REMOVE_POST: { 
            let posts = { ...state }; 
            delete posts[action.postId];
            
            return posts;
        }

        case ADD_COMMENT: { 
            
            return { ...state, [action.postId]: { ...state[action.postId], comments: [ ...state[action.postId].comments, action.comment ] }};
        }

        case REMOVE_COMMENT: { 
            let posts = { ...state }; 
            delete posts[action.postId].comments[action.commentId];
            
            return {...state, [action.postId]: { ...state[action.postId], comments: [ ...state[action.postId].comments ] }};
        }

        case UPDATE_VOTES: { 
            
            return {...state, [action.postId]: { ...state[action.postId], votes: action.votes }};
        }

        default:
            return state;
    }
}
