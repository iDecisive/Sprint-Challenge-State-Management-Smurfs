import React, { useContext } from 'react';

import SmurfListContext from '../contexts/SmurfListContext';

let SmurfList = () => {

    let {smurfs} = useContext(SmurfListContext);

    console.log('sl: ', smurfs);

    return (

        <div className='smurf-list'>

            <h2>Smurf List</h2>

            {smurfs[0].name}

        </div>
    )

}

export default SmurfList;