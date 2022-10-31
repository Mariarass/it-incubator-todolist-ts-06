import {userReduser} from "./user-reduser";

test ('user reducer should increment only age',()=>{
    const startState={age:20,childrenCount:2,name:'Dimych'}
    const endState=userReduser(startState,{type:'INCREMENT-AGE'})
    expect(endState.age).toBe(21)
    expect(endState.childrenCount).toBe(2)

})
test ('user reducer should increment only childrenCounr',()=>{
    const startState={age:20,childrenCount:2,name:'Dimych'}
    const endState=userReduser(startState,{type:'INCREMENT-CHILDREN-COUNT'})
    expect(endState.age).toBe(20)
    expect(endState.childrenCount).toBe(3)

})

test ('user reducer should increment only name',()=>{
    const startState={age:20,childrenCount:2,name:'Dimych'}
    const Name='Victor'
    const endState=userReduser(startState,{type:'CHANGE-NAME',newName:Name})
    expect(endState.name).toBe(Name)


})
export {}