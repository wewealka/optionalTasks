export type ButtonType = {
    name: string
    callBack: () => void
}
export const Button = (props: ButtonType) => {

    const OnClickHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={OnClickHandler}>{props.name}</button>
    )
} 