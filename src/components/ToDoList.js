import './components.css';

const ToDoList = ({item, index, deleteHandler}) => {

    return(
        <div className = "list">
        {item}
        <button className = "deleteButton" onClick = {() => deleteHandler(index)}>Delete</button>
        </div>
    )
}

export default ToDoList