import './components.css';
import ToDoList from './ToDoList'

const Input = (props) => {

    const itemsList = props.addItem.map((list, index) => {
        return (
            <div className = "input">
                <ToDoList key = {index} index = {index} list = {list} deleteHander = {props.deleteHandler}/> 
            </div>
        )
    })
    return <div className = "list">{itemsList}</div>
}

export default Input