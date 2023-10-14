import React, {useState} from 'react';
import {FilterButton} from './filterButton';

export type MoneyType = {
    banknots: string;
    value: number;
    number: string
}

type FilterTaskPropsType = {
    money: Array<MoneyType>
}

type FilterType = 'all' | 'dollar' | 'rubl';

export const FilterTask: React.FC<FilterTaskPropsType> = (props: FilterTaskPropsType) => {

    let filtredMoney = props.money;

    const [moneyFilter, setMoneyFilter] = useState<FilterType>('all');

    if (moneyFilter === 'dollar') {
        filtredMoney = props.money.filter(banknote => banknote.banknots === 'Dollars')
    } else if (moneyFilter === 'rubl') {
        filtredMoney = props.money.filter(banknote => banknote.banknots === 'RUBLS')
    }

    const onClickFilter = (buttonName: FilterType) => {
        setMoneyFilter(buttonName);
    }

    const currentMoney = filtredMoney.map((banknote, index) => {
        return (
            <li key={index + 1} style={{display: 'grid', gridTemplateColumns: 'repeat(3, 50px)', justifyContent: 'center'}}>
                <span>{banknote.banknots}</span>
                <span>{banknote.value}</span>
                <span>{banknote.number}</span>
            </li>
        )
    })

    return (
        <div>
            <ul style={{listStyle: 'none'}}>
                {currentMoney}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <FilterButton name={'all'} callBack={() => {onClickFilter('all')}}/>
                <FilterButton name={'rubles'} callBack={() => {onClickFilter('rubl')}}/>
                <FilterButton name={'dollars'} callBack={() => {onClickFilter('dollar')}}/>
            </div>
        </div>
    );
};

