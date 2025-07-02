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
 // adjust the path based on your structure

function Pic() {
  return (
    <div>
      <h1>Welcome to My Website</h1>
      <img src={myPhoto} alt="My photo" width="300" height="350"/>
    </div>
  );
}

export { Pic  };
