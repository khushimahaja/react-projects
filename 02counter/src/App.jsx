import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)

  // let counter = 15;
  const addValue = () =>{
    console.log('clicked',counter);
    counter =counter + 1
    setCounter(counter)
  }

  const removeValue = () =>{
    console.log('clicked',counter);
   if(counter > 0){
    counter = counter - 1
    setCounter(counter)
    }else{
    setCounter(counter)
   }
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>counter value: {counter} </h2>
      <button onClick={addValue}>Add Value {counter} </button><br/>
      <br/>
      <button onClick={removeValue}>Remove Value {counter}  </button>
      <p>footer: {counter} </p>
    </>
  )
}


export default App
