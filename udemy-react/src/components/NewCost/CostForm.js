import "./CostForm.css"
import {useState} from "react"

export const CostForm = () => {

    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')

    const nameChangeHandler = (event) =>{
        setName(event.target.value)
    }

    const amountChangeHandler = (event) =>{
        setAmount(event.target.value)
    }

    const dateChangeHandler = (event) =>{
        setDate(event.target.value)
    }


    return (
        <form>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>Название</label>
                    <input type="text" onChange={nameChangeHandler}/>
                </div>
                <div className="new-cost__control">
                    <label>Сумма</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-cost__control">
                    <label>Дата</label>
                    <input type="date" onChange={dateChangeHandler}/>
                </div>
            </div>
        </form>
    )
}