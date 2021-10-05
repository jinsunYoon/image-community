import React from 'react';
import styled from 'styled-components';
import {AddCircle} from "@material-ui/icons";

const Button = (props) => {
    const {text, _onClick, is_float, children, margin, width } = props;

    if(is_float){
        return(
            <React.Fragment>
                <FloatButton onClick={_onClick}>
                    {text? text : children}
                    <AddCircle style={{ color: "#9b70e7", fontSize: "45px", background: "#fff", borderRadius: "50px" }} />
                </FloatButton>
            </React.Fragment>
        )
    }

    const styles = {
        margin: margin, 
        width: width,
    };

    return(
        <React.Fragment>
            <ElButton {...styles} onClick={_onClick}>{text? text : children}</ElButton>
        </React.Fragment>
    )
}

Button.defaultProps = {
    text: false,
    children : null,
    _onClick: () => {},
    is_float: false,
    margin: false,
    width: '100%',
}

const ElButton = styled.button`
    width: ${(props) => props.width};
    background-color: #212121;
    color: #fff;
    padding: 12px 0px;
    box-sizing: border-box;
    border: none;
    cursor: pointer;
    ${(props) => (props.margin ? `margin: ${props.margin};` : '')};
`;

const FloatButton = styled.button`
    box-sizing: border-box;
    position: fixed;
    bottom: 50px;
    right: 16px;
    border-style: none;
    background: none;
    cursor: pointer;
`;

export default Button;