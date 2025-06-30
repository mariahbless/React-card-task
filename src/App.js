// import logo from './logo.svg';
 //index.js or App.js
  import 'bootstrap/dist/css/bootstrap.min.css';
  import './App.css';
  import { Garage } from "./Garage/Garage";
  import { Form } from "./Forms/submitform";
  import { Goal } from './goal/Goal';
  import Greet from './Greetings/greetings';

function App() {
   const myName= "Mariahbless " 
   const age= 22
   const school = "Women's Institute of Technology";
   const address = "Bweyogere";

   const herName= "Melisa Angel"
   const herAge= 10
   const herSchool = "Shepherd school Lira";
   const herAddress = "Lira";

   const hisName= "Gifty joy"
   const hisAge= 20
   const hisSchool = "Wisdom high school";
   const hisAddress = "Gulu city ";



  return (
    <div>
    <div className='App'>
      <h1>This is my Greetings Card</h1>
      <Greet name = {myName} age={22} school = {school} address={address}/>
      <Greet name = {herName} age={24} school={herSchool} address= {herAddress}/>
      <Greet name = {hisName} age={28} school={hisSchool} address= {hisAddress}/>
    </div>

  <div className="container">
    <h2 className="mt-4 text-danger">This a form with submission button</h2>
    </div>

   <div className="form">
    <h1> My Form </h1>
    <Form/>
    </div>

   <div className="car">
    <h1> My cars in the Garage </h1>
    <Garage/>
    </div>
   
   <div className="ball">
    <h4>Goal scored in the match</h4>
    <Goal isGoal = {false}/>
    <Goal isGoal = {true}/>
    </div>


    </div>
  );
}

export default App;

// function App(){
//   return (
//     <div>

//       <div className="container">
//       <h2 className="mt-4 text-danger">My Activities of react</h2>
//       <button className="btn btn-primary">click</button>
//       </div>



//     <div className="form">
//       <h1> My Form </h1>
//       <Form/>
//     </div>

//     <div className="App">
//        <h1> My cars in the Garage </h1>
//        <Garage/>
//        </div>

//     <div className="App">
//        <h1>Learning</h1>
//        <Goal isGoal = {false}/>
//        <Goal isGoal = {true}/>
//     </div>

//     </div>
  
//   );
// };
  











// import './App.css';
 //import Greet from './greetings';
 //import { Goal } from './goal/Goal';

//function App() { 
//   const myName= "Mariahbless " 
 //   const age= 22
//   const school = "Women's Institute of Technology";
//   const address = "Bweyogere";

//   const herName= "Melisa Angel"
//   const herAge= 10
//   const herSchool = "Shepherd school Lira";
//   const herAddress = "Lira";

//   const hisName= "Gifty joy"
//   const hisAge= 20
//   const hisSchool = "Wisdom high school";
//   const hisAddress = "Gulu city East";



//   return (
//     <div className='App'>
//       <h1>My greetings card to my friends</h1>
//       <Greet name = {myName} age={22} school = {school} address={address}/>
//       <Greet name = {herName} age={10} school={herSchool} address= {herAddress}/>
//       <Greet name = {hisName} age={20} school={hisSchool} address= {hisAddress}/>
      
//     </div>
//   );
// }

// export default App;
// function App() { 
 //   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// } 
