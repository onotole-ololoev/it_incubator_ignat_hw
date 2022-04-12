import React from 'react';
import style from './Message.module.css';

export type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={style.message}>
            <div className={style.ava_box}>
                <img src={props.avatar} alt="none" className={style.avatar}/>
            </div>
            <div className={style.block}>
                <div className={style.user}>{props.name}</div>
                <span className={style.text}>{props.message}</span>
                <div className={style.time}>{props.time}</div>
            </div>
        </div>
    );
};

export default Message;