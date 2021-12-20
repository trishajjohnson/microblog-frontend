import {  
    ADD_POST, 
    EDIT_POST, 
    REMOVE_POST, 
    GET_TITLES,
    UPDATE_VOTES 
} from '../actions/types';


function makeTitleFromPost({id, title, description}) {
    return {id, title, description};
}

export default function rootReducer(state= [], action) {
    switch (action.type) {
        
        case GET_TITLES: { 
            
            return [ ...action.titles ];
        }

        case ADD_POST: { 
            
            return [ ...state, makeTitleFromPost(action.post) ];
        }

        case EDIT_POST: { 
            
            return state.filter(title => title.id === action.post.id
                ? makeTitleFromPost(action.post)
                : title);
        }

        case REMOVE_POST: { 
            
            return state.filter(title => title.id !== action.postId);
        }

        case UPDATE_VOTES: { 
            
            return state.map(
                title => title.id === action.postId ? { ...title, votes: action.votes } : title);
        }

        default:
            return state;
    }
}
