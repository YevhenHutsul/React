import "./Costs.css";
import { ConstItem } from "./ConstItem";

export function Costs(props) {
    return (
        <>
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
        </>
    )
}