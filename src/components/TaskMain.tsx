import { data1, data2 } from "../tasks/data/data-1-task"
import { data } from "../tasks/data/data-2-task"
import { Tasks1 } from "../tasks/Task1"
import { Task2 } from "../tasks/Task2"
import { Del } from "./Delim"

export const TaskMain = () => {
    return <>             <Tasks1 data={data1} />
        <Tasks1 data={data2} />
        <Del/>
        <Task2 Task2={data}/>
    </>
}