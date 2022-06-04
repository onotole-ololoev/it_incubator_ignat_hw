import React, {useState} from 'react'
import {PATH} from "./Pages";
import {Link} from "react-router-dom";
import s from './../../p1-main/m1-ui/u1-app/App.module.css'

function Header() {
    let [active, setActive] = useState(false);

    const onClickHeaderHandler = () => {
        setActive(!active);
    }

    return (
        <div>
            <div className={active ? s.headerActive : s.header}>
                <div className={s.link}>
                    <Link to={PATH.PRE_JUNIOR}>pre-junior</Link>
                </div>
                <div className={s.link}>
                    <Link to={PATH.JUNIOR}>junior</Link>
                </div>
                <div className={s.link}>
                    <Link to={PATH.JUNIOR_PLUS}>junior+</Link>
                </div>
                <div className={s.headerMarker} onClick={onClickHeaderHandler} onMouseEnter={onClickHeaderHandler}></div>
            </div>
        </div>

    )
}

export default Header
