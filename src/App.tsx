import React, {useState} from 'react';
import './App.css';
import {MapTask, TopCarsType} from './components/map/MapTask';
import {FilterTask, MoneyType} from './components/filter/FilterTask';
import {Button} from './components/button/Button';

function App() {

    const topCars: Array<TopCarsType> = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    const [money, setMoney] = useState<Array<MoneyType>>([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const Button1Foo = (subcriber:string, age: number) => {
        console.log(subcriber, age)
    }

    const Button2Foo = (subcriber:string, age: number) => {
        console.log(subcriber, age)
    }

    const Button3Foo = () => {
        console.log("I'm stupid")
    }

    return (
        <div className="App">
            <MapTask cars={topCars}/>
            <FilterTask money={money}/>
            <Button name = {'MyTouTubeChanel1'} callBack={() => {Button1Foo('VASYA', 21)}}/>
            <Button name = {'MyTouTubeChanel2'}  callBack={() => {Button2Foo('IBAN', 45)}}/>
            <Button name = {'MyTouTubeChanel3'}  callBack={Button3Foo}/>
        </div>
    );
}

export default App;
