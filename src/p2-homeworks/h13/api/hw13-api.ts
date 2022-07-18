import axios from "axios";


export const requestAPI = {
    get() {
        const promise = axios.get('https://neko-cafe-back.herokuapp.com/auth/test')
        return promise
    },
    post(value: boolean) {
        const promise = axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: value})
        return promise
    }
}