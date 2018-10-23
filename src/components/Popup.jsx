import React from 'react';

import back from '../img/popup_back.png';
import '../styles/Popup.sass';

function Popup (props) {

    var divStyle = {
      backgroundImage: 'url(' + back + ')'
    };

    return (
        <div style={divStyle} className={ props.result ? 'popup popup__show' : 'popup' }>
            <div className='popup__inner'>
                <p className='popup__descr'>Найти двух одинаковых губернаторов: игра "Медузы"</p>
                <div className='popup__result'>
                    <p className='popup__result-text'>Я могу различить губернаторов с {props.result} раз</p>
                </div>
            </div>
        </div>
    )
}

export default Popup;
