import React from "react";
import "./App.css";
import Products from "./Components/products";
import TodoList from "./Components/todo";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import TestComponent from './Components/testComponent'

function App() {

  return (
    // <Products /> 
    <TestComponent />
  )

  // const [items, setItems] = React.useState([]);
  // const [value, setValue] = React.useState([]);

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   setItems([...items, value]);
  //   setValue("");
  // }

  // return (
  //   <div>
  //     <h3>TODO</h3>
  //     <TodoList items={items} />
  //     <form onSubmit={handleSubmit}>
  //       <label htmlFor="new-todo">Add todo: </label>
  //       <input
  //         id="new-todo"
  //         value={value}
  //         placeholder="Add Todo..."
  //         onChange={(e) => setValue(e.target.value)}
  //       />
  //       <button>Add #{items.length + 1}</button>
  //     </form>
  //   </div>
  // );
}

export default App;
