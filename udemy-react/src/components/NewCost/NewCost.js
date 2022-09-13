import { useState } from "react";
import { CostForm } from "./CostForm";
import "./NewCost.css"
export const NewCost = ({onSaveNewCostDataHandler}) => {

    const [isFormVisble, setFormVisible] = useState(false)

    const clickButtonHandler = () =>{
        setFormVisible(true)
    }

    const getCancel = () => {
        setFormVisible(false)
    }


    const saveCostDataHandler = (data) =>{
        const obj = {
            ...data,
            id: (Math.random() * 10).toString()
        }

        onSaveNewCostDataHandler(obj)
        setFormVisible(false)
    }
    return (
        <div className="new-cost">
            {!isFormVisble && <button onClick={clickButtonHandler}>Добавить новый расход</button>}
            {isFormVisble && <CostForm onSaveCostData = {saveCostDataHandler} cancel = {getCancel}/>}
        </div>
    )
}