import React from 'react';
import './Input.css'
type InputProps={
    value:string
    callback:(value:string)=>void
    enterCallback:()=>void
    style:string
}
const Input = (props:InputProps) => {

    const {value,callback,enterCallback,style}=props
    
    const onChangeHandler= (event: React.ChangeEvent<HTMLInputElement>)=>{
        callback(event.currentTarget.value)

    }
    const onKeyPressHandler= (event: React.KeyboardEvent<HTMLInputElement>)=>{
        if(event.key==='Enter'){
            enterCallback()
        }

    }

    return (
        <input value={value} className={style} onChange={(event)=>onChangeHandler(event)} onKeyPress={(event)=>onKeyPressHandler(event)}/>
    );
};

export default Input;