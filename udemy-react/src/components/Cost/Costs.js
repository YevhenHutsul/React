import "./Costs.css";
import { ConstItem } from "./ConstItem";
import { Card } from "../UI/Card";

export const Costs = (props) => {
    return (
        <Card   className="costs">
            <ConstItem
                date={props.costs[0].data}
                description={props.costs[0].description}
                amount={props.costs[0].amount}
            ></ConstItem>
            <ConstItem
                date={props.costs[1].data}
                description={props.costs[1].description}
                amount={props.costs[1].amount}
            ></ConstItem>
            <ConstItem
                date={props.costs[2].data}
                description={props.costs[2].description}
                amount={props.costs[2].amount}
            ></ConstItem>
        </Card>
    )
}