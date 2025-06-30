import React from "react";
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './form.css'


function Form() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Thanks for entering  ${name} 's name`)
  }

  return (
    
    <form onSubmit={handleSubmit}>
      <label>Enter your Firstname:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      </label> <br/><br/>
       <input type="submit" />
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Form />);


export { Form };