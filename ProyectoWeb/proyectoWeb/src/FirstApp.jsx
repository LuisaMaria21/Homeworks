import PropTypes from 'prop-types';
import { useState } from 'react';


    

  const FirstApp = ({ value }) => {
    
    const [ counter, setCounter ] = useState ( value );
    const handleAdd = () => setCounter( counter + 1);

    const handleSubstract = () => setCounter( counter - 1);
    const handleReset = () => setCounter( value );


    return (
        <div className='centro'>
            <h1> Contador </h1> 
            <h2> Actividad </h2>
            <span> { counter } </span> 
            <div>
            <button onClick={ () => handleAdd() }>  +1 </button>
            <button onClick={ () => handleSubstract () }> -1 </button>
            <button onClick={ () => handleReset () }> Reset </button>

            </div>
            
        </div>
    )

  }
  
  export default FirstApp
  