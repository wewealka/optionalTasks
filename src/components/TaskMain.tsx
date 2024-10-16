import { data1, data2 } from "../tasks/data/data-1-task"
import { data } from "../tasks/data/data-2-task"
import { data3, MainTitle } from "../tasks/data/data-3-task"
import { Tasks1 } from "../tasks/Task1"
import { Task2 } from "../tasks/Task2"
import { Task3 } from "../tasks/Task3"
import { Del } from "./Delim"

export const TaskMain = () => {
    return <>             <Tasks1 data={data1} />
        <Tasks1 data={data2} />
        <Del/>
        <Task2 Task2={data}/>
        <Del/>
        <Task3 data3={data3} MainTitle={MainTitle}/>
    </>
}