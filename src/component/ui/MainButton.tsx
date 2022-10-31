import React from 'react';
import './MainButton.css'

type ButtonType={
    children: JSX.Element
    callback:()=>void
    style:string
}


const MainButton = (props:ButtonType) => {
   const {style,callback,children}=props

    const onClickHandler=()=>{
        callback()

    }

    return (
        <button className={style} onClick={onClickHandler}>

            {children}

        </button>

    );
};

export default MainButton;