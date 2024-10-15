
import { useState } from "react";
import {DataType2} from "../data/data-2-task"
import { FiltersValueType } from "../Task2";
import { FilterValuesType } from "../Task3";
import { data3, DataType3 } from "./data-3-task"
import { v1 } from 'uuid';

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


export const UsageRemoveBtnTask3 = (data3:DataType3[], id:string):DataType3[] => {
    return data3.filter(temp => temp.id !== id)
}


export const UsageFilterBtn3 = (data3:Array<DataType3>, filter:FilterValuesType) => {
    return filter === "active" ? data3.filter(temp => !temp.isDone) :
    filter === "completed" ? data3.filter(temp => temp.isDone) :
    data3;
}

export const AddTask3 = (data3:DataType3[], title: string):DataType3[] => {
    const newTask: DataType3 = {
        id: v1(),
        title: title,
        isDone: false
    }
    return [newTask, ...data3]
}

