import './components.css';

const Input = ({inputHandler, addHandler,}) => {

    return (
        <div className = "input">
            <input className = "inputtab" onChange = {inputHandler} name = "input" type = "text"></input>
            <button className = "addButton" onClick = {addHandler}>Add</button>
        </div>
    )

}

export default Input