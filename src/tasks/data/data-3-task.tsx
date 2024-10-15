import { v1 } from 'uuid';

export type DataType3 = {
    id: string
    title: string
    isDone: boolean
}

export const MainTitle = "Task-3 lit"

export let data3 = [
    { id: v1(), title: "HTML&CSS", isDone: true },
    { id: v1(), title: "JS", isDone: true },
    { id: v1(), title: "ReactJS", isDone: false },
    { id: v1(), title: "Rest API", isDone: false },
    { id: v1(), title: "GraphQL", isDone: false },
]