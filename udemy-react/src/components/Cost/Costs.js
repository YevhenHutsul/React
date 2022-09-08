import "./Costs.css";
import { ConstItem } from "./ConstItem";
import { Card } from "../UI/Card";
import { CostsFilter } from "./CostsFilter";
import { useState } from "react";

export const Costs = (props) => {

    const [selectedYear, setSelectedYear] = useState("2021");

    const changeYear = (data) => {
        setSelectedYear(data);
    }
    return (
        <>
        <CostsFilter 
        onChangeYear = {changeYear} 
        year = {selectedYear}
        />
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
        </>
    )
}