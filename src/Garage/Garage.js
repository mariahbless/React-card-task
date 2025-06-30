import React from 'react';
import ReactDOM from 'react-dom/client';
import './garage.css'

 export function Car(props) {
  return <li>I have brand new { props.brand }</li>;
}

 export function Garage() {
  const cars = [
    {id: 1, brand: 'Harrier'},
    {id: 2, brand: 'Range Rover '},
    {id: 3, brand: 'Prado'}
  ];
  return (
    <>
	    <h1>These are the cars in my Garage

      </h1>
	    <ul>
        {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);

              