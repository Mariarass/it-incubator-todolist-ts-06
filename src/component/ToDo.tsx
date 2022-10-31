import React, {useState} from 'react';
import MainButton from "./ui/MainButton";
import {FullItput} from "./ui/FullItput";
import s from './ToDo.module.css'

import Input from "./ui/Input";
import AddItemForm from "./AddItemForm";
import EditableSpan from "./EditableSpan";
import {Button, ButtonGroup, Checkbox, IconButton} from "@mui/material";
import {Delete} from "@mui/icons-material";

export type FilterType = 'all' | 'active' | 'completed'
export type  TaskType = {
    id: string
    title: string
    isDone: boolean

}
type ToDoListProps = {
    todoListId: string
    title: string
    filterTask: any
    deleteTask: (todListID: string, id: string) => void
    setFilter: (todoListID: string, value: FilterType) => void
    addTask: (todoListID: string, value: string) => void
    changeIsDone: (todoListID: string, id: string, newIsDone: boolean) => void
    removeTodoList: (todoListID: string) => void
    changeTaskTitle: (todoListId: string, id: string, value: string) => void
    changeTodoTitle: (todoListId: string, value: string) => void


}

export const ToDo = (props: ToDoListProps) => {


    const [nameButton, setNameButton] = useState<FilterType>('all')


    const onChangeFilter = (filterValue: FilterType) => {
        setNameButton(filterValue)
        props.setFilter(props.todoListId, filterValue)

    }
    const changeIsDoneHandler = (id: string, isDone: boolean) => {
        props.changeIsDone(props.todoListId, id, isDone)
    }
    const removeTodoList = () => {
        props.removeTodoList(props.todoListId)

    }

    const addTaskCallback = (title: string) => {
        props.addTask(props.todoListId, title)
    }

    const changeTaskTileCallback = (id: string, newTitle: string,) => {
        props.changeTaskTitle(props.todoListId, id, newTitle)

    }
    const changeTodoTileCallback = (newTitle: string) => {
        props.changeTodoTitle(props.todoListId, newTitle)

    }


    const listItem = props.filterTask.map((e: any, index: number) => {
        const onChangeCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
            changeIsDoneHandler(e.id, event.currentTarget.checked)

        }
        return (
            <p key={e.id} className={e.isDone ? s.isdone : ''}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>

                    <div>
                        <Checkbox checked={e.isDone} onChange={onChangeCheck}/>
                        <EditableSpan title={e.title}
                                      onChange={(newTitle: string) => changeTaskTileCallback(e.id, newTitle)}/>

                    </div>


                    <div>
                        <IconButton aria-label="delete" size="small"
                                    onClick={() => props.deleteTask(props.todoListId, e.id)}>
                            <Delete fontSize="small"/>
                        </IconButton>

                    </div>
                </div>


            </p>

        )
    })

    return (
        <div className="App">
            <div>
                <div className={s.header} >
                    <EditableSpan title={props.title} onChange={changeTodoTileCallback}/>
                    <IconButton aria-label="delete" size="small" onClick={removeTodoList}>
                        <Delete fontSize="small"/>
                    </IconButton>


                </div>

                <AddItemForm addItem={addTaskCallback}/>

                    {listItem}

                <div>
                    <ButtonGroup>
                        <Button color='secondary' variant={nameButton === 'all' ? 'contained' : 'outlined'}

                                onClick={() => onChangeFilter('all')}>
                            <p>All</p></Button>
                        <Button variant={nameButton === 'active' ? 'contained' : 'outlined'}
                                onClick={() => onChangeFilter('active')}><p>Active</p></Button>
                        <Button variant={nameButton === 'completed' ? 'contained' : 'outlined'}
                                onClick={() => onChangeFilter('completed')}><p>Completed</p></Button>

                    </ButtonGroup>

                </div>
            </div>
        </div>
    )
        ;
};


export default ToDo;