export type ButtonType = {
    name: string
    disabled?: boolean
    callBack: () => void
}
export const Button = (props: ButtonType) => {

    const OnClickHandler = () => {
        props.callBack()
    }

    return (
        <button
        disabled = {props.disabled}
        onClick = {OnClickHandler}
        >{props.name}</button>
    )
} 