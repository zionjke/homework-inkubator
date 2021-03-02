import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (value: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void
    error: string
    totalUsers: number
    onKeYAddUser: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeYAddUser} // деструктуризация пропсов
) => {
    const inputClass = !name ? s.error : ''

    return (
        <div>
            <input onKeyPress={onKeYAddUser} value={name} onChange={setNameCallback} className={inputClass}/>
            <button disabled={!name} onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            <div>{name === '' && error}</div>
        </div>
    )
}

export default Greeting
