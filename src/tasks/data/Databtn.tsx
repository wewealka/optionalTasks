import { FiltersValueType } from "../Task2"
import {DataType2} from "../data/data-2-task"

export const UsageFilterBtn = (data:DataType2[], filter:FiltersValueType) => {
    if (filter === "!done") {
        return data.filter(temp => !temp.isDone)
    } else if (filter === "done") {
        return data.filter(temp => temp.isDone)
    } else {
        return data 
    }
}

export const UsageRemoveBtn = (data:DataType2[], id:number):DataType2[] => {
    return data.filter(temp => temp.id !== id)
}











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
