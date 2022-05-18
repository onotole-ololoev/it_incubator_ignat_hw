import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: homeWorkReducerActionsType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort-up': {
            // need to fix
            let newState = [...state]
            return newState.sort((a, b) => a.name > b.name ? 1 : -1)
        }case 'sort-down': {
            // need to fix
            let newState = [...state]
            return newState.sort((a, b) => a.name < b.name ? 1 : -1)
        }
        case 'check': {
            // need to fix
            return state.filter( s => s.age > 18)
        }
        default: return state
    }
}

type homeWorkReducerActionsType = sortUpACType | sortDownACType | sortAgeACType;

type sortUpACType = ReturnType<typeof sortUpAC>
export const sortUpAC = () => {
    return {
        type: 'sort-up'
    } as const
}

type sortDownACType = ReturnType<typeof sortDownAC>
export const sortDownAC = () => {
    return {
        type: 'sort-down'
    } as const
}

type sortAgeACType = ReturnType<typeof sortAgeAC>
export const sortAgeAC = (age: number) => {
    return {
        type: 'check',
        payload: {age}
    } as const
}