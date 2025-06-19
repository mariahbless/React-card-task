// import logo from './logo.svg';
// import './App.css';

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

// export default App;
import './App.css';
import Greet from './greetings';

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
  const hisAddress = "Gulu city East";



  return (
    <div className='App'>
      <h1>My greetings card to my friends</h1>
      <Greet name = {myName} age={22} school = {school} address={address}/>
      <Greet name = {herName} age={10} school={herSchool} address= {herAddress}/>
      <Greet name = {hisName} age={20} school={hisSchool} address= {hisAddress}/>
    </div>
  );
}

export default App;
