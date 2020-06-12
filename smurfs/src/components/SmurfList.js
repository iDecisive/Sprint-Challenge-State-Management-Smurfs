import React, { useContext } from 'react';

import SmurfListContext from '../contexts/SmurfListContext';

import Smurf from './Smurf'

let SmurfList = () => {

    let {smurfs} = useContext(SmurfListContext);

    console.log('sl: ', smurfs);

    return (

        <div className='smurf-list'>

            <h2>Smurf List</h2>

            {smurfs.map((item, index) => {

            return <Smurf smurf={item} index={index} key={index}/>

            })}

        </div>
    )

}

export default SmurfList;