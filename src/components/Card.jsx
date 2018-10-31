import React from 'react';
import '../styles/Card.sass';
import cardPic from '../img/card.png';

function Card ({ id, card, onClick }) {
    return (
        <div className='card' id={id} onClick={(e) => onClick(e)}>
            <div className='card__inner'>
                <div className='card__front'>
                    <img src={cardPic} alt='card' className='card__image'/>
                </div>
                <div className='card__back'>
                    <img src={card} alt='inner card' className='card__image'/>
                </div>
            </div>
        </div>
    )
}

export default Card;
