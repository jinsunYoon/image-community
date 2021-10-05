import React from 'react';
// import Grid from '../elements/Grid';
// import Image from '../elements/Image';
// import Text from '../elements/Text';

import { Grid, Image, Text } from '../elements';

const Post = (props) => {

    return (
        <React.Fragment>
            <Grid>
                <Grid is_flex padding="16px">
                    <Image shape ="circle" src = {props.src}/>
                    <Text bold>{props.user_info.user_name}</Text>
                    <Text>{props.insert_dt}</Text>
                </Grid>
                <Grid padding="16px">
                    <Text>{props.contents}</Text>
                </Grid>
                <Grid >
                    <Image shape="rectangle" src={props.image_url}/>
                </Grid>
                <Grid padding="16px">
                    <Text margin="0" bold>댓글 {props.comment_cnt}개</Text>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

Post.defaultProps = {
    user_info: {
        user_name: "jinsun",
        user_profile: "https://s3.ap-northeast-2.amazonaws.com/sunnieee.shop/1.JPG",
    },
    image_url : "https://s3.ap-northeast-2.amazonaws.com/sunnieee.shop/1.JPG",
    contents : "스타듀밸리네요!",
    comment_cnt: 10,
    insert_dt: "2021-10-01 10:00:00"
};

export default Post;