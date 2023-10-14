import React from 'react';

type ButtonPropsType = {
    name: string;
    callBack: () => void
}

export const Button:React.FC<ButtonPropsType> = (props: ButtonPropsType) => {

    const onCkiclHandler = () => {
        props.callBack();
    }
    return (
        <button onClick={onCkiclHandler}>{props.name}</button>
    )
};

