
import './App.css';
import Test from './Test.js'
import {Test2} from './Test.js'

// const obj = {
//   name1: "RadheShyamJi"
//   roll1: 7
// }

function App() {

  const name = "RadheShyamJi"; 
  const roll = 7; 
  function add(){
    console.log("Gaurav raj");
  }

  return (
 
          <div id='abc'>
            Gaurav Raj is learning ReactJs
            <Test2 name1={name} roll1={roll}/>
            <Test name1={name} roll1={roll} add1={add}/>
            </div>
  
  );
}

export default App;
