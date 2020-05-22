import React from "react";
import * as yup from 'yup';

import './buildpizza.css';

const BuildPizza = props => {

    //Passed from App.js

    let {formState, setFormState, inputErrors, setInputErrors} = props;

    

    //Input Validation Schema using yup

    const formSchema = yup.object().shape({
        name: yup
            .string()
            .min(2, "Type your name")
            .required("Name is Required"),
        size: yup
            .string(),
        mushrooms: yup
            .boolean(),
        onions: yup
            .boolean(),
        feta: yup
            .boolean(),
        garlic: yup
            .boolean(),
        instructions: yup
            .string()
      });

    //Functions

    let onFormInput = event => {

        if (event.target.type !== 'checkbox') {

            setFormState({

                ...formState,
                [event.target.name]: event.target.value
    
            })

        } else {

            setFormState({

                ...formState,
                [event.target.name]: event.target.checked
    
            })

        }


        
        console.log(formState)

    }


    return (

        <div className='pizzaForm'>

            <h1>Build your pizza</h1>

            <form>

                <label>
                    Name

                    <input 
                    type='text' 
                    name='name'
                    onChange={event => onFormInput(event)}
                    value={formState.name.value}>
                    </input>

                </label>

                <label>
                    Pizza Size

                    <select 
                    name='size' 
                    onChange={event => onFormInput(event)}
                    value={formState.size.value}>

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
                    name='mushrooms'
                    onChange={event => onFormInput(event)}>
                    </input>

                </label>           

                <label>
                    Onions 

                    <input 
                    type='checkbox' 
                    name='onions'
                    onChange={event => onFormInput(event)}>
                    </input>

                </label>    

                <label>
                    Feta cheese 

                    <input 
                    type='checkbox' 
                    name='feta'
                    onChange={event => onFormInput(event)}>
                    </input>

                </label>  

                <label>
                    Roasted garlic 

                    <input 
                    type='checkbox' 
                    name='garlic'
                    onChange={event => onFormInput(event)}>
                    </input>

                </label> 

                <label>
                    Special instructions

                    <input 
                    type='text' 
                    name='instructions'
                    onChange={event => onFormInput(event)}
                    value={formState.instructions.value}>
                    </input>

                </label>

                <button disabled={true}>Submit order</button>

            </form>

        </div>
    )

}


export default BuildPizza;