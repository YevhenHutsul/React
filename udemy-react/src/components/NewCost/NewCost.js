import { CostForm } from "./CostForm";
import "./NewCost.css"
export const NewCost = ({onSaveNewCostDataHandler}) => {

    const saveCostDataHandler = (data) =>{
        const obj = {
            ...data,
            id: (Math.random() * 10).toString()
        }

        onSaveNewCostDataHandler(obj)
    }
    return (
        <div className="new-cost">
            <CostForm onSaveCostData = {saveCostDataHandler}/>
        </div>
    )
}