import { DiagramBar } from "./DiagramBar";
import "./Diagram.css"

export const Diagram = (props) => {

    const dataSetValue = props.dataSets.map(dataSet => dataSet.value);

    const maxValueCosts = Math.max.apply(null ,dataSetValue);




    return (
        <div className="diagram">
            {props.dataSets.map(dataSet => (
                <DiagramBar
                    key={Math.random()}
                    value={dataSet.value}
                    maxValue={maxValueCosts}
                    label={dataSet.label}
                />
            ))}
        </div>
    )
}