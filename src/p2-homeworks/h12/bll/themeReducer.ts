import {ThemesType, ThemeType} from "../HW12";

const initState = 'some';


export const themeReducer = (state = initState, action: ChangeThemeACType): string => { // fix any
    switch (action.type) {
        case 'CHANGE-THEME': {
            let newState = action.payload;
            return newState;
        }
        default: return state;
    }
};

type ChangeThemeACType = ReturnType<typeof changeThemeAC>
export const changeThemeAC = (option: ThemeType) => {
    return {
        type: 'CHANGE-THEME',
        payload: option
    } as const
}; // fix any