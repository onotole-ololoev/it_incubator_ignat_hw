import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeAC} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";

const themes = ['dark', 'red', 'some'];

export type ThemeType = string
export type ThemesType = ThemeType[]


function HW12() {
    // const theme = 'some'; // useSelector
    let dispatch = useDispatch();
    // const theme = useSelector<ThemesType, string>((state) => state)
    // useDispatch, onChangeCallback
    const onChangeCallback = (option: any) => {
        dispatch(changeThemeAC(option))
    }
    const theme = useSelector<AppStoreType, ThemeType>(state => state.theme)
    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            <SuperSelect options={themes}
                         onChangeOption={onChangeCallback}
                         value={theme}
            />

            <hr/>
        </div>
    );
}

export default HW12;
