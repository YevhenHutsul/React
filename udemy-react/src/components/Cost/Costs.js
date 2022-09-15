import "./Costs.css";
import { Card } from "../UI/Card";
import { CostsFilter } from "./CostsFilter";
import { useState } from "react";
import { CostList } from "./CostList";
import { CostsDiagram } from "./costsDiagram";

export const Costs = (props) => {
    const [selectedYear, setSelectedYear] = useState("2021");

    const changeYear = (data) => {
        setSelectedYear(data);
    }


    const filtered = props.costs.filter(cost => {
        return cost.data.getFullYear().toString() === selectedYear
    })





    return (
        <>
            <Card className="costs">
                <CostsFilter
                    onChangeYear={changeYear}
                    year={selectedYear}
                />
                <CostsDiagram 
                    costs = {filtered}
                />
                <CostList costs={filtered}/>
            </Card>
        </>
    )
}