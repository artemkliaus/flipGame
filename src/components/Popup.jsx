import React from 'react';
import PropTypes from 'prop-types';

import back from '../img/popup_back.png';
import '../styles/Popup.sass';

const Popup = ({ view = 'start', popupHandler, result = null}) => {

    const divStyle = {
      backgroundImage: 'url(' + back + ')'
    };

    let popupInner;

    if (view !== 'end') {
        popupInner =
            <div className='popup__result'>
                <button className='popup_start-button' onClick={() => popupHandler('hide')}>Начать игру</button>
                <button className='popup_start-button' onClick={() => popupHandler('rules')}>Читать правила</button>
                <p className='popup_rules-text'>Поочередно переворачивая карты необходимо найти одинаковые за минимальное количество ходов</p>
            </div>;
    } else {
        popupInner = <div className='popup__result'>
            <p className='popup__result-text'>Я могу различить губернаторов с {result} раз</p>
        </div>;
    }

    const template =
        <div style={divStyle} className={'popup popup_' + view}>
            <div className='popup__inner'>
                <p className='popup__descr'>Найти двух одинаковых губернаторов: игра "Медузы"</p>
                {popupInner}
            </div>
        </div>;

    return (template);
};

Popup.propTypes = {
    view: PropTypes.string,
    popupHandler: PropTypes.func,
};

export default Popup;
