import React from 'react';
import styled from 'styled-components';

const Image = (props) => {
    const {shape, src, size} = props;

    const styles = {
        src : src, 
        size : size,
    }

    if(shape === "circle"){
        return (
            <ImageCircle {...styles}></ImageCircle>
        )
    }

    if(shape === "rectangle"){
        return(
            <AspectOutter>
                <AspectInner {...styles}></AspectInner>
            </AspectOutter>
        )
    }

    return(
        <React.Fragment>
            
        </React.Fragment>
    )
}

Image.defaultProps ={
    shape: "circle",
    src: "https://s3.ap-northeast-2.amazonaws.com/sunnieee.shop/1.JPG",
    size: 36,
}

const AspectOutter = styled.div`
    width: 100%;
    min-width: 250px;
`;

const AspectInner = styled.div`
    position: relative;
    padding-top: 75%;
    overflow: hidden;
    background-image: url("${(props) => props.src}");
    background-size: cover;
`;

const ImageCircle = styled.div`
    --size: ${(props)=>props.size}px;
    /* width: var(--size);
    height: var(---size);
    border-radius: var(--size); */
    width: 2rem;
    height: 2rem;
    border-radius: 2rem;

    background-image: url("${(props) => props.src}");
    background-size: cover;
    margin-right: 4px;
`;

export default Image;