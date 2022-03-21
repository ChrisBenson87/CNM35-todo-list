import './App.css';
import {useState} from 'react';
import Input from './components/input'

const App = () => {

  const [userInput, setUserInput] = useState("")
  const [addItem, setAddItem] = useState ([])
  
  const inputHandler = (event) => {
      setUserInput(event.target.value)
  }
  
  const addHandler = () => {
    let storedAddItems = [...addItem]
    storedAddItems.push(userInput)
    setAddItem(storedAddItems)
    setUserInput("")
  }
  
  const deleteHandler = (index) => {
    let storedDeleteItems = [...addItem]
    storedDeleteItems.splice(index, 1)
    setAddItem(storedDeleteItems)
  }
  
  return (
    <div className="App">
      <div><h1>To Do List</h1>
      <>
      <Input addItem = {addItem} deleteHandler = {deleteHandler}/>
      </>
        <input className = "inputtab" onChange = {inputHandler} name = "input" type = "text"></input>
        <button className = "addButton" onClick = {addHandler}>Add</button>
      </div>
    </div>
  );
}
export default App
