import React, {ChangeEvent, FormEvent, useState} from 'react'

type FullInputPropsType = {
    postMessage: (title: string) => void
}

export const FullInput:React.FC<FullInputPropsType> = (props) => {

    const {postMessage, ...restProps} = props

    let [title, setTitle] = useState('');

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const postMessageOnClickButtonHandler = () => {
        postMessage(title);
        setTitle('')
    }

    return <div>
        <input onChange={onChangeInputHandler} value={title}/>
        <button onClick={postMessageOnClickButtonHandler}>+</button>
    </div>
}