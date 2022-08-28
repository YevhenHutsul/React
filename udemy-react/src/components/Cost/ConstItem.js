import {useState} from "react"
import { Card } from "../UI/Card"
import { CostDate} from "./CostDate"
import "./style.css"

export const ConstItem = (props) => {

    const [description, setDescription] = useState(props.description);
    
    const changeDescriptionHandler = () => {
        setDescription("Car")
    }
    
    return (
        <Card className="cost-item">
            <CostDate date={props.date}/>
            <div className="cost-item__description">
                <h2>{description}</h2>
                <div className="cost-item__price">${props.amount}</div>
                <button onClick={changeDescriptionHandler}>Change smt</button>
            </div>
        </Card>

    )
}

