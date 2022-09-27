import style from "./CardStyle.module.css"

export const Card = (props) => {
    return (
        <div className={`${style.card} ${props.className}`}>{props.children}</div>
    )
}