import React from 'react';

const PizzaForm = () => {
    const handleSubmit = e => {
        e.preventDefault();
        const size = document.getElementById("size").value;
        const pepperoni = document.getElementById("pepp").checked;
        const glutenFree = document.getElementById("g-free").checked;
        const additionalInstructions =
            document.getElementById("add-instr").value || "None";
        const nameForOrder =
            document.getElementById("name-for-order").value || "Anonymous";
        const quantity = document.getElementById("quantity").value || 1;

        const orderStr = `Order for ${quantity} ${size} pizza(s) that are ${
            glutenFree ? `gluten-free` : `not gluten-free`
            } and ${
            pepperoni ? `have pepperoni` : `dont have pepperoni`
            } for ${nameForOrder} \n\n Instructions: ${additionalInstructions}`;

        // don't edit this line, it shows your string in the most-recent-order div
        document.getElementById("most-recent-order").innerText = orderStr;
        // alerts order string in browser
        alert(orderStr);
    }

    return (
        <div className = "container">
            <form onSubmit={handleSubmit}>
                <div>Name:</div>
                <input id="name-for-order" />
                <div>Size</div>
                <select id="size">
                    <option>small</option>
                    <option>medium</option>
                    <option>large</option>
                    <option>X-large</option>
                </select>
                <div>Pepperoni</div>
                <input type="checkbox" id="pepp" />
                <div>Gluten Free</div>
                <input type="checkbox" id="g-free" />
                <div>Quantity</div>
                <input type="number" id="quantity" />
                <div>Additional Instructions</div>
                <textarea cols="50" rows="3" id="add-instr" />
                <input id="form-submit" type="submit" />
            </form>
            <h3>Most Recent Order:</h3>
            <div id="most-recent-order"></div>
        </div>
    )
}

export default PizzaForm;