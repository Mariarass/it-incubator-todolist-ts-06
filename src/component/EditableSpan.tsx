import React, {useState} from 'react';
import {TextField} from "@mui/material";

type EditableSpanType = {
    title: string
    onChange:(newTitle:string)=>void
}
const EditableSpan = (props: EditableSpanType) => {
    const {title,onChange}=props
    const [editMode, setEditMode] = useState(false)
    const [value, setValue] = useState('')

    const activeEditMode = () => {
        setEditMode(true)
        setValue(props.title)

    }
    const activeViewMode = () => {
        setEditMode(false)
        onChange(value)



    }
    const onChangeHandler= (event: React.ChangeEvent<HTMLInputElement>)=>{
        setValue(event.currentTarget.value)

    }
    return editMode
        ? <TextField
            value={value}
            onChange={onChangeHandler}
            onBlur={activeViewMode}
            autoFocus

        />
        : <span onDoubleClick={activeEditMode}>{title}</span>


};

export default EditableSpan;