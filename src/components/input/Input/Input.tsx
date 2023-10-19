import React, {ChangeEvent} from 'react';

type InputPropsType = {
    title: string
    setTitle: (title: string) => void
}


export const Input:React.FC<InputPropsType> = (props) => {

    const {title, setTitle, ...restProps} = props

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return (
        <input onChange={onChangeInputHandler} value={title}/>
    );
};

