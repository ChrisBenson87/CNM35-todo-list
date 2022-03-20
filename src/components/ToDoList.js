const ToDoList = ({item, index, deleteHandler}) => {

    return(
        <div>
        {item}
        <button className = "deleteButton" onClick = {() => deleteHandler(index)}>Delete</button>
        </div>
    )
}

export default ToDoList