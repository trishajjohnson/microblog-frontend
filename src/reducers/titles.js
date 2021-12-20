import {  
    ADD_POST, 
    EDIT_POST, 
    REMOVE_POST, 
    GET_TITLES 
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

        default:
            return state;
    }
}
