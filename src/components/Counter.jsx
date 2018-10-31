import React from 'react';
import '../styles/Counter.sass';

function Counter ({ moves }) {

    return (
            <div className='counter' >
                Счетчик ходов: {moves}
            </div>
    )
}

export default Counter;
