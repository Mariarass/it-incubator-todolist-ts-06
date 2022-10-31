import React from 'react';
type PropsType={
    checked:boolean
    callback:(isDone:boolean)=>void
}

const Checkbox = (props:PropsType) => {
    const {callback,checked}=props
    const onChangeHandler= (event: React.ChangeEvent<HTMLInputElement>)=>{
        callback(event.currentTarget.checked)
    }

    return (
        <input type='checkbox'  checked={checked} onChange={(event)=>{onChangeHandler(event)}}/>
    );
};

export default Checkbox;