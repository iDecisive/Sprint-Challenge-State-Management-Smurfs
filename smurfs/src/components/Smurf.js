import React, {useContext} from 'react';
import axios from 'axios';

import SmurfsContext from '../contexts/SmurfListContext';

let Smurf = props => {

    let { smurf, index } = props;

    let { smurfs, setSmurfs } = useContext(SmurfsContext);


    let remove = () => {

        
        
    }
    
    return (

        <div className='smurf'>

            <div className='smurf-text'>

                <span>{smurf.name} is </span>
                <span>{smurf.age} years old and </span>
                <span>{smurf.height} tall!</span>

            </div>

            <button onClick={remove}>remove</button>

        </div>

    )

}

export default Smurf;