import { useState } from "react"
import { data } from "./data/data-2-task"
import { UsageFilterBtn, UsageRemoveBtn } from "./data/Databtn"
import { DataType2 } from "./data/data-2-task" 
import { Button } from "../components/Button"

export type FiltersValueType = "all" | "done" | "!done"

export type Task2Type = {
    Task2:DataType2[]
}

export const Task2 = (props:Task2Type) => {
    
    let [dataTask2] = useState(data)
    let [currentdata, setCurrentData] =useState(dataTask2)

    const ChooseTypeOfData = (filter: FiltersValueType) => {
        setCurrentData(UsageFilterBtn(data, filter))
    }

    const RemoveData = (id:number) => {
        setCurrentData(UsageRemoveBtn(currentdata, id))
    }

    const DataList: Array<JSX.Element> = currentdata.map((data:DataType2)=>{
        return (
            <li key={data.id}>
                <input type="checkbox" checked={data.isDone} />
                <span>{data.title}</span>
                <Button name={"X"} callBack={() =>RemoveData(data.id) }/>
            </li>
        )
    })
    return( 
        <div>
            <ul>
                {DataList}
            </ul>
            <ul>
                <Button name={"all"} callBack={()=>ChooseTypeOfData("all")}/>
                <Button name={"not done"} callBack={()=>ChooseTypeOfData("!done")}/>
                <Button name={"done"} callBack={()=>ChooseTypeOfData("done")}/>
            </ul>
        </div>
    )
}




// const [TasksFilter] = useState<TaskType[]>(props.tasks)
// const [CurrentTask, setCurrentTask] = useState(TasksFilter)



// const ChooseOptionForTask = (filter: FiltersValuesType) => {
//     setCurrentTask(UsageFilterBtn(props.tasks, filter))
// }
// const removeTask = (id: number) => {
//     setCurrentTask(prevTasks => UsageRemoveBtn(prevTasks, id));
// };


// export const UsageRemoveBtn = (tasks: TaskType[], id: number): TaskType[] => {
//     return tasks.filter(task => task.id !== id);
// };

// export const UsageFilterBtn = (tasks: TaskType[], filter: FiltersValuesType) => {
//     if (filter === "Active") {
//         return tasks.filter(task => !task.isDone);
//     } else if (filter === "Completed") {
//         return tasks.filter(task => task.isDone);
//     } else {
//         return tasks;
//     }
// }
