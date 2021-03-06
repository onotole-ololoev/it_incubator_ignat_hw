import React, {useReducer} from 'react'
import {homeWorkReducer, sortAgeAC, sortDownAC, sortUpAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    // const [people, setPeople] = useState<UserType[]>(initialPeople) // need to fix any
    const [people, peopleDispatch] = useReducer( homeWorkReducer, initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: UserType) => (
        <div key={p._id}>
            name: <b>{p.name}</b>, age: <b>{p.age}</b>
        </div>
    ))

    // const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}))
    // const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}))
    // const filterAge = () => setPeople(homeWorkReducer(initialPeople, {type: 'check', payload: 'filter'}))

    const sortUp = () => peopleDispatch(sortUpAC())
    const sortDown = () => peopleDispatch(sortDownAC())
    const sortAge = () => peopleDispatch(sortAgeAC(18))

    return (
        <div>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}
            {finalPeople}

            <div>
                <SuperButton onClick={sortUp}>sort up</SuperButton>
                <SuperButton onClick={sortDown}>sort down</SuperButton>
                <SuperButton onClick={sortAge}>check 18</SuperButton>
            </div>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
