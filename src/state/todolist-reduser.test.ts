import {v1} from "uuid";
import {
    AddTodoListAC,
    ChangeTodolistFilterAC,
    ChangeTodoListTitleAC,
    RemoveTodoListAC,
    todilistReduser
} from "./todolist-reduser";

export type TodoListType = {
    id: string
    title: string
    filter: string
}

test('todolist should be removed', () => {
    let todolistId1 = v1()
    let todolistId2 = v1()

    const startState: TodoListType[] = [
        {id: todolistId1, title: 'What to learn', filter: 'all'},
        {id: todolistId2, title: 'What to buy', filter: 'all'}
    ]

    const endState = todilistReduser(startState, RemoveTodoListAC(todolistId1))
    expect(endState.length).toBe(1)
    expect(endState[0].id).toBe(todolistId2)

})

test('todolist should be added ', () => {
    let todolistId1 = v1()
    let todolistId2 = v1()
    const newTodoListTitle = 'New TodoList'

    const startState: TodoListType[] = [
        {id: todolistId1, title: 'What to learn', filter: 'all'},
        {id: todolistId2, title: 'What to buy', filter: 'all'}
    ]

    const endState = todilistReduser(startState, AddTodoListAC(newTodoListTitle))
    expect(endState.length).toBe(3)
    expect(endState[2].title).toBe(newTodoListTitle)
    expect(endState[2].filter).toBe('all')

})
test('todolist should be change name', () => {
    let todolistId1 = v1()
    let todolistId2 = v1()
    const newTodoListTitle = 'New TodoList'

    const startState: TodoListType[] = [
        {id: todolistId1, title: 'What to learn', filter: 'all'},
        {id: todolistId2, title: 'What to buy', filter: 'all'}
    ]

    const endState = todilistReduser(startState, ChangeTodoListTitleAC(todolistId2,newTodoListTitle))
    expect(endState[0].title).toBe('What to learn')
    expect(endState[1].title).toBe(newTodoListTitle)


})

test('correct filter of todolist should be changed', () => {
    let todolistId1 = v1()
    let todolistId2 = v1()
    let newFilter='completed'

    const startState: TodoListType[] = [
        {id: todolistId1, title: 'What to learn', filter: 'all'},
        {id: todolistId2, title: 'What to buy', filter: 'all'}
    ]

    const endState = todilistReduser(startState, ChangeTodolistFilterAC(todolistId2,newFilter))
    expect(endState[0].filter).toBe('all')
    expect(endState[1].filter).toBe(newFilter)


})

export {}