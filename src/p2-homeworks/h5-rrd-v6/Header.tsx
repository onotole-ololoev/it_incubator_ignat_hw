import React from 'react'
import {PATH} from "./Pages";
import {Link} from "react-router-dom";
import s from './../../p1-main/m1-ui/u1-app/App.module.css'

function Header() {
    return (
        <div className={s.header}>
            <div className={s.link}>
                <Link to={PATH.PRE_JUNIOR}>pre-junior</Link>
            </div>
            <div className={s.link}>
                <Link to={PATH.JUNIOR}>junior</Link>
            </div>
            <div className={s.link}>
                <Link to={PATH.JUNIOR_PLUS}>junior+</Link>
            </div>
            <div className={s.headerMarker}>

            </div>
        </div>
    )
}

export default Header
