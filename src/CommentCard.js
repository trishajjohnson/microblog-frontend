import React from 'react';
import './CommentCard.css';


function CommentCard({comment, remove, id}) {
    return (
        <div className="comment mb-3">      
            <p className="comment-body mb-0">
                {comment.text}
            </p>
            <div className='comment-end'>
            <i id={id} className="far fa-trash-alt text-secondary remove-btn"
                onClick={remove} />
            </div>
        </div>
    )
}

export default CommentCard;