import React, { ChangeEvent, KeyboardEvent, useRef } from "react"
import { AddTask3 } from "../tasks/data/Databtn"
import { DataType3 } from "../tasks/data/data-3-task"
import { Button } from "./Button"

type onChangeRefType = {
    newTaskTitle1: string
    currentState1:DataType3[]
    setCurrentState1: React.Dispatch<React.SetStateAction<DataType3[]>>
    setNewTaskTitle1: (title:string) => void

}



export const InputWithRef:React.FC<onChangeRefType> = ({newTaskTitle1, setNewTaskTitle1, currentState1, setCurrentState1}) => {
    let onChangeRef = useRef<HTMLInputElement>(null)
    const InputController = !newTaskTitle1;
    const ULM =`${10-newTaskTitle1.length} chars left`
    const ULMControllerUI = newTaskTitle1.length > 10;
    const ULMController = newTaskTitle1.length <= 10;

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle1(e.currentTarget.value)
    }

    const onKeyPressHandler = (e:KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter"){
            ObjectCreator1?.()
        }
    }

    const ObjectCreator1 = () => {
        if (newTaskTitle1.trim()){
            const updatedObject = AddTask3(currentState1, newTaskTitle1)
            setCurrentState1(updatedObject)
            setNewTaskTitle1("")
        } else {    
            alert ("invalid input")
        }
    }

    return (
        <div>
            <input
            ref={onChangeRef}
            value={newTaskTitle1}
            onChange={onChangeHandler}
            onKeyDown={onKeyPressHandler}
        />
        <Button
                name={"+"}
                disabled = {InputController || ULMControllerUI}
                callBack={ObjectCreator1}
                />
            {(!InputController && !ULMControllerUI) && <div>{ULM}</div>}
            {ULMControllerUI && <div style={{color: "red"}}>Too many chars</div>}
        </div>
        
    )
}