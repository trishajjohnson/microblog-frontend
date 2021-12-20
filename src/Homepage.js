import React, { useState, useEffect } from 'react';
import PostCard from './PostCard';
import { useDispatch, useSelector } from 'react-redux';
import { getTitlesFromApi } from './actions/titles';
import { updateVoteInApi } from './actions/posts';


function Homepage() {
    const titles = useSelector(store => store.titles);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    console.log("titles from redux", titles);
    
    const postCards = titles.map(title => (
        <PostCard post={title} id={title.id} key={title.id} vote={vote} />
    ));

    useEffect(function() {
        async function fetchTitle() {
            await dispatch(getTitlesFromApi());
            setIsLoading(false);
            console.log("titles from redux", titles);
        }
        
        if(isLoading) {
            fetchTitle();
        }

    }, [dispatch, isLoading, titles]);


    function vote(direction, id) {
        dispatch(updateVoteInApi(id, direction));
    }

    if(isLoading) return <p>Loading...</p>

    return (
        <div className="mr-3">
            <h4 className="mt-3 header">Welcome to <b>Microblog</b>, our innovative site for communicating on the information superhighway.</h4>
            <div>
                <div className='row'>
                    {postCards}
                </div>
            </div>
        </div>
    );
}

export default Homepage;