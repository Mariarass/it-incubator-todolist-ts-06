import React, {useState} from 'react';
import './App.css';
import {FilterType, TaskType, ToDo} from "./component/ToDo";
import {v1} from 'uuid';

import AddItemForm from "./component/AddItemForm";
import {AppBar, Box, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

type TodoListType = {
    id: string
    title: string
    filter: FilterType

}
type TaskStateType = {
    [key: string]: TaskType[]

}
const App = () => {
    const todoListId_1 = v1()
    const todoListId_2 = v1()
    const [todoList, setTodoList] = useState<Array<TodoListType>>(
        [
            {id: todoListId_1, title: 'what to learn', filter: 'all'},
            {id: todoListId_2, title: 'what to buy', filter: 'all'}
        ])


    const [task, setTask] = useState({
        [todoListId_1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS/TS", isDone: true},
            {id: v1(), title: "React", isDone: false},
            {id: v1(), title: "Redux", isDone: false},
            {id: v1(), title: "RTK", isDone: false}],
        [todoListId_2]: [
            {id: v1(), title: "water", isDone: true},
            {id: v1(), title: "beer", isDone: true},
            {id: v1(), title: "bread", isDone: false},
            {id: v1(), title: "milk", isDone: false},
            {id: v1(), title: "meet", isDone: false}],


    })


    const changeIsDone = (todoListID: string, id: string, newIsDone: boolean) => {
        setTask({...task, [todoListID]: task[todoListID].map(el => el.id === id ? {...el, isDone: newIsDone} : el)})
    }

    const removeTask = (todoListID: string, id: string) => {
        setTask({...task, [todoListID]: task[todoListID].filter((el: any) => el.id != id)})
    }

    const addTask = (todoListID: string, value: string) => {
        const newTask = {id: v1(), title: value, isDone: false}
        setTask({...task, [todoListID]: [newTask, ...task[todoListID]]})
    }
    const changeFilter = (todoListID: string, value: FilterType) => {
        setTodoList(todoList.map(el => el.id === todoListID ? {...el, filter: value} : el))

    }
    const removeTodoList = (todoListId: string) => {
        setTodoList(todoList.filter(el => el.id !== todoListId))
        delete task[todoListId]

    }
    const addTodoList = (title: string) => {
        const newTodoListId: string = v1()
        const newTodoList: TodoListType = {
            id: newTodoListId,
            title: title,
            filter: 'all'
        }
        setTodoList([...todoList, newTodoList])
        setTask({...task, [newTodoListId]: []})
    }

    const changeTaskTitle = (todoListID: string, id: string, newTitle: string) => {
        setTask({...task, [todoListID]: task[todoListID].map(el => el.id === id ? {...el, title: newTitle} : el)})
    }
    const changeTodoTitle = (todoListId: string, newTitle: string) => {
        setTodoList(todoList.map(el => el.id == todoListId ? {...el, title: newTitle} : el))

    }

    return (
        <div className={'AppContainer'}>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static" sx={{background:'#00bcd4'}}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{mr: 2}}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            News
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Container fixed >
                <Grid container style={{padding:'20px'}}>
                    <AddItemForm addItem={addTodoList}/>
                </Grid>

                <Grid container spacing={2} justifyContent={'center'}>
                {
                    todoList.map((el) => {
                        let filterTask = task[el.id]
                        if (el.filter === 'active') {
                            filterTask = task[el.id].filter((e: TaskType) => !e.isDone)
                        }
                        if (el.filter === 'completed') {
                            filterTask = task[el.id].filter((e: TaskType) => e.isDone)
                        }

                        return (
                        <Grid item>
                            <Paper  elevation={2} style={{padding:'20px'}}>
                            <ToDo
                                todoListId={el.id}
                                title={el.title}
                                filterTask={filterTask}
                                changeIsDone={changeIsDone}
                                deleteTask={removeTask}
                                setFilter={changeFilter}
                                addTask={addTask}
                                removeTodoList={removeTodoList}
                                changeTaskTitle={changeTaskTitle}
                                changeTodoTitle={changeTodoTitle}


                            />
                            </Paper>

                        </Grid>


                        )
                    })
                }
                </Grid>


            </Container>
        </div>


    );
}

export default App;
