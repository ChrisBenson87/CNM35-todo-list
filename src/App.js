import './App.css';
import {useState} from 'react';
import ToDoList from './components/ToDoList'
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
    let storedAddItems = [...addItem]
    storedAddItems.splice(index, 1)
    storedAddItems(storedAddItems)
  }
  
  return (
    <div className="App">
      <div><h1>To Do List</h1>
        <Input inputHandler = {inputHandler} addHandler = {addHandler}/>
        {addItem.map((item, index) => (
          <ToDoList key = {index} index = {index} item = {item} deleteHander = {deleteHandler}/>
        ))}
      </div>
    </div>
  );
}
export default App
