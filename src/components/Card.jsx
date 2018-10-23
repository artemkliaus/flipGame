import React from 'react';
import '../styles/Card.sass';
import card from '../img/card.png';

function Card (props) {
    return (
        // <div className='card' onClick={(e) => props.onClick(e)} id={props.name}>{props.name}</div>
        <div className='card' id={props.id} onClick={(e) => props.onClick(e)}>
            <div className='card__inner'>
                <div className='card__front'>
                    <img src={card} alt='card' className='card__image'/>
                </div>
                <div className='card__back'>
                    <img src={props.card} alt='inner card' className='card__image'/>
                </div>
            </div>
        </div>
    )
}

export default Card;
