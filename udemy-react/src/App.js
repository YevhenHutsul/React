import { Costs } from "./components/Cost/Costs";
import { NewCost } from "./components/NewCost/NewCost";

function App() {
    const saveNewCostDataHandler = (data) => {
        console.log(data)

    }
    const costs = [
        {
            data: new Date(2021, 3, 12),
            description: "Холодильник",
            amount: 999.99
        },
        {
            data: new Date(2022, 3, 12),
            description: "Машина",
            amount: 12999.99
        },
        {
            data: new Date(2020, 3, 12),
            description: "Хлеб",
            amount: 99.99
        },
    ]
    return (
        <div>
            <NewCost onSaveNewCostDataHandler = {saveNewCostDataHandler}/>
            <Costs costs = {costs}/>
        </div>
    );
}

export default App;
