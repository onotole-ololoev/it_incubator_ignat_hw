import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e:ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: any // need to fix any
    totalUsers: number // need to fix any
    usersCount: number

}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = ({name, setNameCallback, addUser, error, totalUsers, usersCount} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.someClass// need to fix with (?:)


    return (
        <div className={s.container}>
            <div className={s.inputBlock}>
                <input value={name} onChange={setNameCallback} className={inputClass} />
                <span className={s.errorText}>{error}</span>
            </div>
            <div className={s.buttonBlock}>
                <button onClick={addUser} className={s.btn}>add</button>
                <span>{usersCount}</span>
            </div>

        </div>
    )
}

export default Greeting
