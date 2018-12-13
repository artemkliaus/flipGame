import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Field.sass';
import { connect } from 'react-redux';
import { setMoves, setDisplayMoves, setCardsList, setFoundCards, setPrevCard } from '../actions/FieldActions';

//Components
import Card from '../components/Card';
import Counter from '../components/Counter';

class Field extends Component {

    constructor(props) {
        super();

        this.styles = {
            hideCard: 'card_hide',
            activeCard: 'card_active'
        }

        const cardsListFirstPart = props.field.cardSymbols.map(card => this.prepareCard(card, 0));
        const cardsListSecondPart = props.field.cardSymbols.map(card => this.prepareCard(card, 1));
        const cardsList = [...cardsListFirstPart, ...cardsListSecondPart].sort(this.randomazeArr);

        props.setCardsList(cardsList);
    }

    static propTypes = {
        showResult: PropTypes.func,
        field: PropTypes.object
    }

    clickHandler (e) {
        const { moves } = this.props.field;
        const card = e.currentTarget;
        let success
        let displayMoves;

        const isAllowUpdate = this.checkForUpdateMoves(card);

        if (isAllowUpdate) {
            displayMoves = this.updateMoves(moves);
            this.setActiveCard(card);
            success = this.checkCouple(card);
        }

        if (success) {
            this.hideCards(card);
            this.foundCards(displayMoves);
        }
    }

    updateMoves (moves) {
        let { displayMoves } = this.props.field;
        moves += 1;

        this.props.setMoves(moves);

        if (moves % 2 === 0) {
            displayMoves += 1;
            this.props.setDisplayMoves(displayMoves);
        }

        return displayMoves;
    }

    checkForUpdateMoves (card) {
        let { prevCard } = this.props.field;
        return (!prevCard || prevCard.id !== card.id) ? true : false;
    }

    checkCouple (card) {
        let { prevCard } = this.props.field;
        return ( prevCard && prevCard.id[0] === card.id[0] ) ? true : false;
    }

    hideCards (card) {
        let { prevCard } = this.props.field;
        let { hideCard } = this.styles;
        card.classList.add(hideCard);
        prevCard.classList.add(hideCard);
        return true;
    }

    foundCards (displayMoves) {
        let { foundCards } = this.props.field;
        foundCards += 1;
        this.props.setFoundCards(foundCards);
        this.checkEndGame(foundCards, displayMoves);
        return foundCards;
    }

    checkEndGame (foundCards, displayMoves) {
        if (foundCards === 8) {
            this.showPopup(displayMoves);
            return true;
        }
        return false;
    }

    showPopup (moves) {
        this.props.showResult(moves);
    }

    setActiveCard (card) {
        let { prevCard } = this.props.field;

        if (prevCard) {
            prevCard.classList.remove(this.styles.activeCard);
        }

        card.classList.add(this.styles.activeCard);

        this.props.setPrevCard(card);
    }

    prepareCard (card, num) {
        let key = card.id + '' + num;
        return (
            <Card key={key} id={key} card={card.src} onClick={this.clickHandler.bind(this)}></Card>
        )
    }

    randomazeArr () {
        return +(Math.random() * 10 > 4) ? 1 : 0
    }

    render () {
        const { displayMoves, cardsList } = this.props.field;
        return (
            <div className='field'>
                <Counter moves={displayMoves}/>
                {cardsList}
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        field: store.field
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setMoves: moves => dispatch(setMoves(moves)),
        setDisplayMoves: displayMoves => dispatch(setDisplayMoves(displayMoves)),
        setCardsList: cardsList => dispatch(setCardsList(cardsList)),
        setFoundCards: foundCards => dispatch(setFoundCards(foundCards)),
        setPrevCard: card => dispatch(setPrevCard(card))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Field)
