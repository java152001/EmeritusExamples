import './App.css';
import React from 'react';
import PizzaForm from './components/example1/PizzaForm';
import ControlledInputs from './components/example2/ControlledInputs';
import FormikExample from './components/formikExample/FormikExample'

function App() {
    // Example 1
    // return (
    //     <div>
    //         <PizzaForm />
    //     </div>
    // )

    // Example 2
    // return (
    //     <>
    //         <ControlledInputs city="Tucson" />
    //     </>
    // )

    // Formik Example
    return (
        <>
            <FormikExample />
        </>
    )
}

export default App;
