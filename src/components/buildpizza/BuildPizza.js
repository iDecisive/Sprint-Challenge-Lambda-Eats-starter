import React from "react";

import './buildpizza.css';

const BuildPizza = props => {

    return (

        <div className='pizzaForm'>

            <h1>Build your pizza</h1>

            <form>

                <label>
                    Name

                    <input 
                    type='text' 
                    name='name'>
                    </input>

                </label>

                <label>
                    Pizza Size

                    <select>

                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>

                    </select>

                </label>     
                
                <h3>Toppings</h3>

                <label>
                    Mushrooms 

                    <input 
                    type='checkbox' 
                    name='mushrooms'>
                    </input>

                </label>           

                <label>
                    Onions 

                    <input 
                    type='checkbox' 
                    name='onions'>
                    </input>

                </label>    

                <label>
                    Feta cheese 

                    <input 
                    type='checkbox' 
                    name='feta'>
                    </input>

                </label>  

                <label>
                    Roasted garlic 

                    <input 
                    type='checkbox' 
                    name='garlic'>
                    </input>

                </label> 

                <label>
                    Special instructions

                    <input 
                    type='text' 
                    name='instructions'>
                    </input>

                </label>

                <button>Submit order</button>

            </form>

        </div>
    )

}


export default BuildPizza;