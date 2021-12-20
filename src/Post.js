import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import NewPostForm from './NewPostForm';
import CommentCard from './CommentCard';
import { updatePostInApi, addCommentToApi, getPostFromApi, deletePostFromApi, deleteCommentFromApi, updateVoteInApi } from './actions/posts';
import { useSelector, useDispatch } from 'react-redux';
import './Post.css';
import CommentList from './CommentList';
 

function Post() {
    // const { postId } = useParams();
    const postId = Number(useParams().postId);
    const dispatch = useDispatch();
    const history = useHistory();

    const [isEditing, setIsEditing] = useState(false);
    const [comment, setComment] = useState();
    const post = useSelector(st => st.posts[postId]);
    

    useEffect(function() {
        async function getPostOnMount() {
            dispatch(getPostFromApi(postId));
        }
        
        if(!post) {
            getPostOnMount();
        }

    }, [dispatch, postId, post]);

    if(!post) return <p>Loading</p>

    // Handle form data changing
    function handleChange(evt) {
        setComment(evt.target.value);
    }

    // Posts
    function editPost({title, description, body}) {
        dispatch(updatePostInApi(postId, title, description, body));
        setIsEditing(false);
    }
    
    function removePost() {
        dispatch(deletePostFromApi(postId));
        history.push('/');
    }

    function toggleIsEditing() {
        setIsEditing(edit => !edit);
    }

    // Comments
    function addCommentToPost(e) {
        e.preventDefault();
        dispatch(addCommentToApi(postId, comment))
        setComment("");
    }

    function removeComment(e) {
        const id = e.target.id;
        dispatch(deleteCommentFromApi(postId, id));
    }

    function handleClick(e) {
        // e.preventDefault();
        const direction = e.target.id;
        dispatch(updateVoteInApi(postId, direction));
    }

    if(isEditing) {
        return (
            <NewPostForm post={post} save={editPost} cancel={toggleIsEditing} />
        );
    }

    return (
        <div className="Post mr-5 mt-3">
            <h2 className="title">{post.title}</h2>
            <p className='lead'>{post.description}</p>
            <p className="post">{post.body}</p>
            
            <div className="Post-right">
                <div className="Post-edit-area">
                    <i className="far fa-edit text-primary"
                        onClick={toggleIsEditing}></i>
                    <i className="far fa-trash-alt text-danger"
                        onClick={removePost}></i>
                </div>
                <div className="votes">
                        {post.votes} votes
                        <i id="up" className="fas fa-thumbs-up text-success ml-3 mr-3" onClick={handleClick}></i>
                        <i id="down" className="fas fa-thumbs-down text-danger" onClick={handleClick}></i>
                </div>
            </div>
            <hr />
            <div className='comments-section'>
                <h4>Comments</h4>
                <div className='mb-3'>
                    <CommentList comments={post.comments} remove={removeComment} />
                </div>
                <form className='form'>
                    <textarea
                        id="text"
                        name="text"
                        className="form-control"
                        value={comment}
                        onChange={handleChange}
                        rows="3"
                        placeholder='New Comment...'
                    ></textarea>
                    <button onClick={addCommentToPost} className="btn btn-primary mt-3">Add</button>
                </form>
            </div>
        </div>
    );
}

export default Post;
