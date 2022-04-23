import React, {useState} from 'react';

const ControlledInput = () => {
    const [name, setName] = useState("");

    const updateName = newName => {
        setName(newName);
    }

    const handleSubmit = e => {
        e.preventDefault();
        alert('A name was submitted ' + name);
    }

    return (
        <>
            <form onSubmit = {handleSubmit}>
                <label>Name: </label>
                <input 
                    type = "text" 
                    value = {name}
                    onChange = { e => updateName(e.target.value) } 
                />
                <button>Submit</button>
                <p>My name is {name}</p>
            </form>
        </>
    )
}

export default ControlledInput;