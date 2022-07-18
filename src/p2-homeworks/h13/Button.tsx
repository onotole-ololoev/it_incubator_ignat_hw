import React from 'react';

type ButtonType = {
    onClick: () => void
}

const Button = (props: ButtonType) => {
    const onClickHandle = () => {
        props.onClick()
    }

    return (
        <button onClick={onClickHandle}>btn</button>
    );
};

export default Button;