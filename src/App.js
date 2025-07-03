// import logo from './logo.svg';
 //index.js or App.js
  import 'bootstrap/dist/css/bootstrap.min.css';
  import './App.css';
  import { Garage } from "./Garage/Garage";
  import { Form } from "./Forms/submitform";
  import { Goal } from './goal/Goal';
  import Greet from './Greetings/greetings';
  import { MyForm } from './Forms/form';
  //import { Header } from './header/head';
  import { Headers } from './Nav/navbar';
  import { Pic } from './header/head';

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
      <div className="heads">
    <Headers/>
   </div>
   <div className="picture">
    <Pic/>
    </div>
    <div className='App'>
      <h1>Client's Greetings Card</h1>
      <Greet name = {myName} age={age} school = {school} address={address}/>
      <Greet name = {herName} age={herAge} school={herSchool} address= {herAddress}/>
      <Greet name = {hisName} age={hisAge} school={hisSchool} address= {hisAddress}/>
    </div>

  <div className="container">
    <h2 className="mt-4 text-danger">Client's submission Form</h2>
    </div>

   <div className="form">
    <h1> My Form </h1>
    <Form/>
    </div>

   <div className="car">
    <h1>  </h1>
    <Garage/>
    </div>
   
   <div className="ball">
    <h4>Goal scored in the match</h4>
    <Goal isGoal = {false}/>
    <Goal isGoal = {true}/>
    </div>

   <div className="form1">
    <h1> Client's Reg Form </h1>
    <MyForm/>
    </div>

    

   
    



    </div>
  );
}

export default App;















