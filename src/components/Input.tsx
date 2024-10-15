import { ChangeEvent, KeyboardEvent } from "react"
import { Button } from "./Button"
import { DataType3 } from "../tasks/data/data-3-task"
import { AddTask3 } from "../tasks/data/Databtn"


interface MainInput {
    newTaskTitle: string
    currentState:DataType3[]
    setCurrentState: React.Dispatch<React.SetStateAction<DataType3[]>>
    setNewTaskTitle: (title:string) => void
}
const deffaultCreater = () => {};

export const Input:React.FC<MainInput> = ({newTaskTitle, setNewTaskTitle, currentState, setCurrentState}) => {


    const InputController = !newTaskTitle;
    const ULM =`${10-newTaskTitle.length} chars left`
    const ULMControllerUI = newTaskTitle.length > 10;
    const ULMController = newTaskTitle.length <= 10;

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }
    const onKeyDownHandler = (e:KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            ULMController ? ObjectCreator?.() : alert ("massege shuold be correct")
        } 
    }
    const ObjectCreator = () => {
        if (newTaskTitle.trim()) {
            const updatedObject = AddTask3(currentState, newTaskTitle)
            setCurrentState(updatedObject)
            setNewTaskTitle("")
        } else {
            alert("invalid input")
        }
    }

    return (
        <div>
            <input
            value={newTaskTitle}
            onChange={onChangeHandler}
            onKeyDown={onKeyDownHandler}
            />
            <Button
                name={"+"}
                disabled = {InputController || ULMControllerUI}
                callBack={ObjectCreator || deffaultCreater}
                />
            {(!InputController && !ULMControllerUI) && <div>{ULM}</div>}
            {ULMControllerUI && <div style={{color: "red"}}>Too many chars</div>}
        </div>
    )
}