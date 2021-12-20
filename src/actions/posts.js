import axios from 'axios';
import { 
    ADD_POST, 
    EDIT_POST, 
    REMOVE_POST, 
    ADD_COMMENT, 
    REMOVE_COMMENT, 
    GET_POST, 
    UPDATE_VOTES 
} from "./types";

const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api/posts";

// Posts actions
export function getPostFromApi(postId) {
    return async function(dispatch) {
        const result = await axios.get(`${BASE_URL}/${postId}`);
        return dispatch(getPost(result.data));
    }
}

function getPost(post) {
 
    return {
        type: GET_POST,
        post: post
    }
}

export function addPostToApi(title, description, body) {
    return async function(dispatch) {
        const result = await axios.post(`${BASE_URL}`, {
            title,
            description,
            body
        });
        return dispatch(addPost(result.data));
    }
}

function addPost(post) {

    return {
        type: ADD_POST,
        post: post
    }
}

export function updatePostInApi(id, title, description, body) {
    return async function(dispatch) {
        const result = await axios.put(`${BASE_URL}/${id}`, {
            title,
            description,
            body
        });
        return dispatch(updatePost(result.data));
    }
}

function updatePost(post) {
   
    return {
        type: EDIT_POST,
        post: post
    }
}

export function deletePostFromApi(id) {
    return async function(dispatch) {
        await axios.delete(`${BASE_URL}/${id}`);
        return dispatch(deletePost(id));
    }
}

function deletePost(id) {
    
    return {
        type: REMOVE_POST,
        postId: id
    }
}


// Comments actions
export function addCommentToApi(postId, comment) {
    return async function(dispatch) {
        console.log("comment in addCommentToApi", comment)
        const result = await axios.post(`${BASE_URL}/${postId}/comments`, { text: comment });
        console.log("result", result)
        return dispatch(addComment(postId, result.data));
    }
}

function addComment(postId, comment) {
    
    return {
        type: ADD_COMMENT,
        comment: comment,
        postId: postId
    }
}

export function deleteCommentFromApi(postId, commentId) {
    return async function(dispatch) {
        await axios.delete(`${BASE_URL}/${postId}/comments/${commentId}`);
        return dispatch(deleteComment(postId, commentId));
    }
}

function deleteComment(postId, commentId) {
    
    return {
        type: REMOVE_COMMENT,
        commentId: commentId,
        postId: postId
    }
} 

export function updateVoteInApi(postId, direction) {
    return async function(dispatch) {
        const result = await axios.post(`${BASE_URL}/${postId}/vote/${direction}`);
        return dispatch(updateVotes(postId, result.data.votes));
    }
}

function updateVotes(postId, votes) {
    console.log("votes", votes)
    return {
        type: UPDATE_VOTES,
        votes: votes,
        postId: postId
    }
} 