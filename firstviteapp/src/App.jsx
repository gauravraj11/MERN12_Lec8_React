
import { useState } from 'react'
import './App.css'
import Child from './Child'


function App() {

const [a, setA] = useState(11);

const [name, setName] = useState("Gaurav");
const [obj, setObj] = useState({
  "roll": 7,
  "desig": "student"
});


function radhey(){
  setA(a+10);
  console.log(a);
  
}
function changeName(){
  setName("Raj")
}

// const obj = {
//     children : "Gaurav Raj Faculty MERN"
// }
  return (
    <>
    <div>
      My first Vite Project {a} {name} {obj.roll} {obj.desig}
      <br />
      <button onClick={radhey}>Change A </button>
      <button onClick={changeName}>Change Name </button>
      <br />
      <Child >Gaurav Raj Faculty MERN</Child>
      <Child />
    </div>
       
    </>
  )
}

export default App
