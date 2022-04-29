import React, {useState} from 'react';

const ControlledInput = (props) => {
    const [name, setName] = useState("");

    console.log(props);

    const updateName = newName => {
        console.log(newName)
        setName(newName.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        alert('A name was submitted ' + name);
    }

    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <label>Name: </label>
                <input 
                    type = "text" 
                    value = {name}
                    onChange = { e => updateName(e) } 
                />
                <button>Submit</button>
                <p>My name is {name} from the city of {props.city}</p>
            </form>
        </div>
    )
}

export default ControlledInput;