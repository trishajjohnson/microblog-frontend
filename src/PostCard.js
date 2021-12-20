import React from 'react';
import { Link } from 'react-router-dom';

function PostCard({post, id, vote}) {
    console.log("post", post)
    console.log("id", id)


    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <div className="card-body">
                    <p className="card-title lead">
                        <Link to={`/${id}`}>{post.title}</Link>
                    </p>
                    <div className="votes">
                        {post.votes} votes
                        <i id="up" className="fas fa-thumbs-up text-success ml-3 mr-3" onClick={evt => vote("up", id)}></i>
                        <i id="down" className="fas fa-thumbs-down text-danger" onClick={evt => vote("down", id)}></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostCard; 