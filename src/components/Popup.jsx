import React from 'react';

import back from '../img/popup_back.png';
import '../styles/Popup.sass';

function Popup (props) {

    const divStyle = {
      backgroundImage: 'url(' + back + ')'
    };

        if (props.view !== 'end') {
            return (
                <div style={divStyle} className={'popup popup_' + props.view}>
                    <div className='popup__inner'>
                        <p className='popup__descr'>Найти двух одинаковых губернаторов: игра "Медузы"</p>
                        <div className='popup__result'>
                            <button className='popup_start-button' onClick={(e) => props.popupHandler(e)} id='start'>Начать игру</button>
                            <button className='popup_start-button' onClick={(e) => props.popupHandler(e)} id='rules'>Читать правила</button>
                            <p className='popup_rules-text'>Поочередно переворачивая карты необходимо найти одинаковые за минимальное количество ходов</p>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div style={divStyle} className={'popup popup_' + props.view}>
                    <div className='popup__inner'>
                        <p className='popup__descr'>Найти двух одинаковых губернаторов: игра "Медузы"</p>
                        <div className='popup__result'>
                            <p className='popup__result-text'>Я могу различить губернаторов с {props.result} раз</p>
                        </div>
                    </div>
                </div>
            )
        }
}

export default Popup;
