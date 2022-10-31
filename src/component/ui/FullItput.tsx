import React, {useState} from 'react';
type  FullItputType={
    callback:(value:string)=>void
}
export const FullItput= (props:FullItputType) => {
    let [title,setTitle]=useState('')
    const onChangeInput=(value:string)=>{
        setTitle(value)
    }
    const onChangeButton=()=>{

        props.callback(title)
        setTitle('')


    }
    return (
        <div>
            <input onChange={(event)=>onChangeInput(event.target.value)} value={title}/>
            <button onClick={onChangeButton}>x</button>


        </div>
    );
};

