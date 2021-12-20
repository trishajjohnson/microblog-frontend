import React from 'react';
import NewPostForm from './NewPostForm';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addPostToApi } from './actions/posts';


function NewPost() {
    const history = useHistory();
    const dispatch = useDispatch();

    function addNewPost({title, description, body}) {
        dispatch(addPostToApi(title, description, body));
        history.push('/');
    }

    function cancelPost() {
        history.push('/');
    }
    return (
        <div className="container NewPostForm mt-3">
            <h2>New Post</h2>
            <NewPostForm save={addNewPost} cancel={cancelPost} />
        </div>
    )
}

export default NewPost;