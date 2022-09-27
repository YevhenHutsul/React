import { Card } from "../UI/Card/Card";
import style from "./CreateUser.module.css";
import { Button } from "../UI/Button/Button";

import { useState } from "react"
export const CreateUser = (props) => {

    const CreateUserHandler = (event) => {
        event.preventDefault()
        const name = objOfValue.name;
        const age = +objOfValue.age;

        if (name.trim().length === 0 || age <= 1) {
            return;
        }
        console.log(objOfValue)
        setValue((prev) => ({
            name: "",
            age: ""
        }))
    }

    const [objOfValue, setValue] = useState({
        name: "",
        age: "",
    })

    const setInputOrAgeValue = (event) => {
        const value = event.target.value;

        setValue((prev) => ({
            ...prev,
            [event.target.id]: value
        }))
    }

    return (
        <Card className={style.input}>
            <form onSubmit={CreateUserHandler}>
                <label htmlFor="name">Имя</label>
                <input id="name" type="text" onChange={setInputOrAgeValue} value={objOfValue.name}></input>
                <label htmlFor="age">Возраст</label>
                <input id="age" type="number" onChange={setInputOrAgeValue} value={objOfValue.age}/>
                <Button type="submit">Добавить пользователя</Button>
            </form>
        </Card>
    )
}