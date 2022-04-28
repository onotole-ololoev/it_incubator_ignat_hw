import React from 'react'
import s from './Affairs.module.css'
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: any // need to fix any
    deleteAffairCallback: (value: number)=> void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix

    return (
        <div className={s.affairBlock}>
            <div className={s.affairItem}>{props.affair.name}</div>
            <div className={s.affairItem}>{props.affair.priority}</div>
            <button className={s.affairBtn} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
