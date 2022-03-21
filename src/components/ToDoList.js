import './components.css';

const ToDoList = (props) => {

    const remove = (index) => {
        props.deleteHandler(index)
    }

    return(
        <div className = "list">
        {props.list}
        <button className = "deleteButton" onClick = {() => remove(props.index)}>Delete</button>
        </div>
    )
}

export default ToDoList