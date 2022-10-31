import {TodoListType} from "./todolist-reduser.test";
import {v1} from "uuid";


export type RemoveTodolistActionType={
    type:'REMOVE-TODOLIST'
    id:string
}

export type AddTodolistActionType={
    type:'ADD-TODOLIST'
    title:string
}
export type ChangeTodolistTitleActionType={
    type:'CHANGE-TODOLIST-TITLE'
    id:string
    title:string
}

export type ChangeTodolistFilterActionType={
    type:'CHANGE-TODOLIST-FILTER'
    id:string
    filter:string
}

type ActionsType=RemoveTodolistActionType|AddTodolistActionType|ChangeTodolistTitleActionType|ChangeTodolistFilterActionType


export const todilistReduser = (state: TodoListType[], action: ActionsType): TodoListType[] => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            return state.filter(el => el.id != action.id)

        }
        case 'ADD-TODOLIST': {
            return [...state, {id: v1(), title: action.title, filter: 'all'}]

        }
        case 'CHANGE-TODOLIST-TITLE': {
            const todoList=state.find(el=>el.id===action.id)
            if(todoList){
                todoList.title=action.title
            }

            return [
                ...state
            ]

        }
        case 'CHANGE-TODOLIST-FILTER': {
            const todoList=state.find(el=>el.id===action.id)
            if(todoList){
                todoList.filter=action.filter
            }

            return [
                ...state
            ]

        }

        default:
            throw new Error('xz')

    }

}
export const RemoveTodoListAC=(todolistID:string):RemoveTodolistActionType=>{
    return {type:'REMOVE-TODOLIST',id:todolistID}
}
export const AddTodoListAC=(title:string):AddTodolistActionType=>{
    return {type:'ADD-TODOLIST',title}
}

export const ChangeTodoListTitleAC=(id:string,title:string):ChangeTodolistTitleActionType=>{
    return {type:'CHANGE-TODOLIST-TITLE',id,title}
}

export const ChangeTodolistFilterAC=(id:string,filter:string):ChangeTodolistFilterActionType=>{
    return {type:'CHANGE-TODOLIST-FILTER',id,filter}
}