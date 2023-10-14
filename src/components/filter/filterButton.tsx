import React from 'react';

type FilterButtonPropsType = {
    name: string;
    callBack: () => void
}

export const FilterButton:React.FC<FilterButtonPropsType> = (props:FilterButtonPropsType) => {

    const changeRate = () => {
        props.callBack();
    }

    return (
        <button onClick={changeRate}>
            {props.name}
        </button>
    );
};

