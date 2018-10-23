import React from 'react';
import '../styles/Counter.sass';

function Counter (props) {

    return (
            <div className='counter' >
                Счетчик ходов: {props.moves}
            </div>
    )
}

export default Counter;
