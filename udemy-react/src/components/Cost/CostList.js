import { ConstItem } from "./ConstItem"

export const CostList = (props) => {


    if (props.costs.length === 0) {
        return <h2>В этом году расходов нет</h2>
    }

    return <ul className="cost-list">
        {props.costs.map((costs) => (
        <ConstItem
            key={Math.random()}
            date={costs.data}
            description={costs.description}
            amount={costs.amount}
        />
        ))}
    </ul>
}

