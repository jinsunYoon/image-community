import React from 'react';
import Post from "../commonents/Post";
import CommentList from '../commonents/CommentList';
import CommentWrite from '../commonents/CommentWrite';

const PostDetail = (props) => {

    return(
        <React.Fragment>
            <Post/>
            <CommentWrite/>
            <CommentList/>
        </React.Fragment>
    )
}

export default PostDetail;
