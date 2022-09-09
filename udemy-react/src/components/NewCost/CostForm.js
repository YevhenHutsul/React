import "./CostForm.css"
import { useState } from "react"

export const CostForm = ({ onSaveCostData }) => {

    //const [description, setName] = useState('')
    //const [amount, setAmount] = useState('')
    //const [date, setDate] = useState('')

    const [userInput, setUserInput] = useState({
        description: "",
        amount: "",
        data: ""
    })

    const nameChangeHandler = (event) => {
        setUserInput((prev) => ({
            ...prev,
            description: event.target.value
        }))
    }

    const amountChangeHandler = (event) => {
        setUserInput((prev) => ({
            ...prev,
            amount: event.target.value
        }))
    }

    const dateChangeHandler = (event) => {
        setUserInput((prev) => ({
            ...prev,
            data: event.target.value
        }))
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const data = {
            ...userInput,
            data: new Date(userInput.data)
        }

        onSaveCostData(data)

        setUserInput(() => ({
            description: "",
            amount: "",
            data: ""
        }))

        

    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>Название</label>
                    <input type="text" value={userInput.description} onChange={nameChangeHandler} />
                </div>
                <div className="new-cost__control">
                    <label>Сумма</label>
                    <input type="number" value={userInput.amount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-cost__control">
                    <label>Дата</label>
                    <input type="date" value={userInput.data} onChange={dateChangeHandler} />
                </div>
                <div className="new-cost__action">
                    <button type="submit">Добавить рассход</button>
                </div>
            </div>
        </form>
    )
}