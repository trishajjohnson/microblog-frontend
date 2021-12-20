import React from 'react';
import CommentCard from './CommentCard';

function CommentList({comments, remove}) {
    let commentCards;

    if(comments.length > 0) {
        commentCards = comments.map(comment => (
            <CommentCard key={comment.id} id={comment.id} comment={comment} remove={remove} />
        ));
    } else {
        commentCards = <p>There are no comments yet...</p>
    }

    return (
        <div>
            {commentCards}
        </div>
    );
}

export default CommentList;