import React from 'react';

export type TopCarsType = {
    manufacturer: string;
    model: string
}

type MapTaskPropsType = {
    cars: Array<TopCarsType>
}

export const MapTask: React.FC<MapTaskPropsType> = (props: MapTaskPropsType) => {
    const cars = props.cars.map((car, index) => {
        return (
            <tr key={index + 1}>
                <div style={{gridTemplateColumns: 'repeat(2, 80px)', display: 'grid'}}>
                    <th>
                        {car.manufacturer}
                    </th>
                    <th>
                        {car.model}
                    </th>
                </div>
            </tr>
        )
    })

    return (
        <table>
            {
                cars
            }
        </table>
    );
};

