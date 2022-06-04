const initState = false


export const loadingReducer = (state = initState, action: LoadingACType): boolean => {
    switch (action.type) {
        case 'CHANGE_STATUS': {
            return !state
        }
        default:
            return state
    }
}

type LoadingACType = ReturnType<typeof loadingAC>

export const loadingAC = () => {
    return {
        type: 'CHANGE_STATUS'
    } as const
}