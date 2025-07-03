import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

// function Header() {
//   return (
//     <header className="bg-primary text-white p-3">

//       <h1>Footer design with React</h1>
//     </header>
//   );
// }

// export { Header };
//import React from "react";
import myPhoto from '../assets/1000005666.jpg';
import mary2 from '../assets/mary2.jpg'
import './header.css'

function Pic() {
  return (
    <div className="mi-image">
      <h1>Welcome to My Garage, Have A seat!!</h1> <b/>
      <h1>Reception</h1>
      <img src={myPhoto} alt="My" width="600" height="450"/>General Manager Mary
      
      <img src={mary2} alt="May" >
      </img>
    </div>
  );
}

export { Pic  };
