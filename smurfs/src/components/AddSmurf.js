import React, { useState, useContext } from 'react';
import SmurfListContext from '../contexts/SmurfListContext';
import axios from 'axios';

let AddSmurf = () => {

    const { smurfs, setSmurfs } = useContext(SmurfListContext);

    const [formInput, setFormInput] = useState({

        name: '',
        age: 1,
        height: ''

    });

    let inputChange = event => {

        setFormInput({

            ...formInput,
            [event.target.id]: event.target.value

        });

    }

    let addSmurf = event => {

        event.preventDefault();

        axios.post('http://localhost:3333/smurfs', {

            // name: 'hihi',
            // age: 5,
            // height: '1cm'

            name: formInput.name,
            age: Number(formInput.age),
            height: formInput.height,
            id: smurfs.length 

        }).then(response => {

            console.log('axios POST response', response.data);

            setSmurfs(response.data);

        }).catch(error => {

            console.log('axios POST err: ', error);

        });

    }

    return (

        <div className='create-smurf'>

            <h2>Create a smurf</h2>
        
            <form>

                <label>Name-
                    <input 
                    id='name' 
                    type='text' 
                    onChange={event => inputChange(event)}
                    value={formInput.name}/>
                </label>

                <label>Age----
                    <input id='age' type='number' onChange={event => inputChange(event)} value={formInput.age}/>
                </label>

                <label>Height-
                    <input id='height' type='text' onChange={event => inputChange(event)} value={formInput.height}/>
                </label>

                <button onClick={event => addSmurf(event)}>Create</button>

            </form>

        </div>

        

    )

}

export default AddSmurf;