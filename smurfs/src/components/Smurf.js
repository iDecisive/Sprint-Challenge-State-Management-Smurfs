import React, {useContext} from 'react';
import axios from 'axios';

import SmurfsContext from '../contexts/SmurfListContext';

let Smurf = props => {

    let { smurf, index } = props;

    let { smurfs, setSmurfs } = useContext(SmurfsContext);


    let remove = () => {

        axios.delete('http://localhost:3333/smurfs/' + smurf.id).then(response => {

            console.log('axios DEL response', response.data);

            setSmurfs(response.data);

        }).catch(error => {

            console.log('axios DEL err: ', error);
        });
        
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