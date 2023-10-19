import React from 'react';

type InputButtonPropsType = {
    name: string
    callBack: () => void
}
export const InputButton:React.FC<InputButtonPropsType> = (props) => {

    const {name, callBack, ...restProps} = props;

    const onClickNuttonHandler = () => {
        callBack();
    }

    return (
        <button onClick={onClickNuttonHandler}>{name}</button>
    );
};

