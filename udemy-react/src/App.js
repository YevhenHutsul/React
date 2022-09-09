import { Costs } from "./components/Cost/Costs";
import { NewCost } from "./components/NewCost/NewCost";
import { useState } from "react";


const INIT__COST = [
    {
        id: "c1",
        data: new Date(2021, 3, 12),
        description: "Холодильник",
        amount: 999.99
    },
    {
        id: "c2",
        data: new Date(2022, 3, 12),
        description: "Машина",
        amount: 12999.99
    },
    {
        id: "c3",
        data: new Date(2020, 3, 12),
        description: "Хлdfdеб",
        amount: 99.99
    },
]
function App() {

    const [costs, setCosts] = useState(INIT__COST)

    const saveNewCostDataHandler = (data) => {
        setCosts( (prev) => {
            return [data, ...prev]
        })
    }


    return (
        <div>
            <NewCost onSaveNewCostDataHandler={saveNewCostDataHandler} />
            <Costs costs={costs} />
        </div>
    );
}

export default App;
