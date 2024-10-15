import { useState } from "react";
import { data3, DataType3, MainTitle } from "./data/data-3-task";
import { AddTask3, UsageFilterBtn3, UsageRemoveBtnTask3 } from "./data/Databtn";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { InputWithRef } from "../components/InputWidref";
import { Del } from "../components/Delim";

export type FilterValuesType = "all" | "active" | "completed";

export type Task3Type = {
    data3: DataType3[]
    MainTitle: string
}


export const Task3 = (props: Task3Type) => {

    const [listRef] = useAutoAnimate<HTMLUListElement>()

///////////////////////////////////////////////////////////////////////////////////////////
    let [state] = useState<DataType3[]>(data3)
    let [currentState, setCurrentState] = useState(state)
    const [filter, setFilter] = useState<FilterValuesType>("all");
    let [newTaskTitle, setNewTaskTitle] = useState("")

    const ChooseOptionForData = (filter: FilterValuesType) => {
        setFilter(filter);
    };
    const RemoveObject = (id: string) => {
        setCurrentState(UsageRemoveBtnTask3(currentState, id))
    }
    
    const filteredTasks = UsageFilterBtn3(currentState, filter);
    const DataList: Array<JSX.Element> = filteredTasks.map((temp: DataType3) => {
        return <li key={temp.id}>
            <input type="checkbox" checked={temp.isDone} />
            <span>{temp.title}</span>
            <Button name={"X"} callBack={() => RemoveObject(temp.id)} />
        </li>
    })

///////////////////////////////////////////////////////////////////////////////////////////

    let [state1] = useState<DataType3[]>(data3)
    let [currentState1, setCurrentState1] = useState(state1)
    const [filter1, setFilter1] = useState<FilterValuesType>("all");
    let [newTaskTitle1, setNewTaskTitle1] = useState("")
    
    const ChooseOptionForData1 = (filter1: FilterValuesType) => {
        setFilter1(filter1);
    };
    const RemoveObject1 = (id: string) => {
        setCurrentState1(UsageRemoveBtnTask3(currentState1, id))
    }

    const filteredTasks1 = UsageFilterBtn3(currentState1, filter1);
    const DataList2 = filteredTasks1.map((temp: DataType3) => {
        return (
            <li key={temp.id}>
                <input type="checkbox" checked={temp.isDone} readOnly />
                <span>{temp.title}</span>
                <Button name={"X"} callBack={() => RemoveObject1(temp.id)} />
            </li>
        );
    });
///////////////////////////////////////////////////////////////////////////////////////////
    

    return <div>
        <div>
            <h3>{MainTitle}</h3>
            <div>
                <div><Input newTaskTitle={newTaskTitle} setNewTaskTitle={setNewTaskTitle} currentState={currentState} setCurrentState ={setCurrentState}/></div>
            </div>
            <ul ref={listRef}>
                {DataList}
            </ul>
            <div>
                <Button name={"all"} callBack={() => ChooseOptionForData("all")} />
                <Button name={"active"} callBack={() => ChooseOptionForData("active")} />
                <Button name={"completed"} callBack={() => ChooseOptionForData("completed")} />
            </div>
        </div>
        <Del/>
        <div>
            <h3>Task-3  WhithREf</h3>
            <div>
                <InputWithRef newTaskTitle1={newTaskTitle1} currentState1={currentState1} setCurrentState1={setCurrentState1} setNewTaskTitle1 ={setNewTaskTitle1}/>
            </div>
            <ul ref={listRef}>
                {DataList2}
            </ul>
            <div>
                <Button name={"all"} callBack={() => ChooseOptionForData1("all")} />
                <Button name={"active"} callBack={() => ChooseOptionForData1("active")} />
                <Button name={"completed"} callBack={() => ChooseOptionForData1("completed")} />
            </div>
        </div>
    </div>

}