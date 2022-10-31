import React, {useState} from 'react';
import Input from "./ui/Input";
import {Button, IconButton, TextField} from "@mui/material";
import {Add} from "@mui/icons-material";



type AddItemFormType = {
    addItem: (title: string) => void

}


const AddItemForm = (props: AddItemFormType) => {

    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<null | string>('')

    const addTaskHandler = () => {
        if (title.trim() !== '') {
            props.addItem(title.trim())
            setTitle('')

        } else {
            setError('Title is requaiment   ')
        }

    }

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
        setError(null)
    }


    const onEnterHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        event.key == 'Enter' && addTaskHandler()

    }


    return (
        <div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <TextField
                    value={title}
                    label='Enter value'
                    error={!!error}
                    onChange={onChangeHandler}
                    onKeyPress={onEnterHandler}
                    helperText={error}
                    InputProps={{
                        endAdornment: (

                            <IconButton onClick={addTaskHandler}>
                                <Add sx={{fill: '#ec407a'}}/>
                            </IconButton>

                        ),
                    }}
                />


            </div>


        </div>
    );
};

export default AddItemForm;