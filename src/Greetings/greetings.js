import React from 'react';
import './greetings.css';



 function Greet({ name, age, school, address}){
    console.log(name, 'name')
    console.log(age, 'age')
    console.log(school, 'school')
    console.log(address, 'address')
    return(
        <div className='greeting_cards'>
            <h3> Hi there! my name is {name}</h3>
            <p>I am {age} years old</p>
            <p>I am studying from  {school}</p>
            <p>My residence is {address}</p>
        </div>
    )
}
export default Greet;