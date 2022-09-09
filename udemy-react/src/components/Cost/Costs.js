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


    const filtered = props.costs.filter(cost => {
        return cost.data.getFullYear().toString() === selectedYear
    })

    let costsContent = <p>В этом году расходов не было</p>

    if(filtered.length > 0){
        costsContent = filtered.map(cost => (
            <ConstItem
                key={Math.random()}
                date={cost.data}
                description={cost.description}
                amount={cost.amount}
            />
        ))
    }


    return (
        <>
            <Card className="costs">
                <CostsFilter
                    onChangeYear={changeYear}
                    year={selectedYear}
                />
                {costsContent}
            </Card>
        </>
    )
}