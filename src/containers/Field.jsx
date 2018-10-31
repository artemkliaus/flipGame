import React, { Component } from 'react';
import '../styles/Field.sass';
import { connect } from 'react-redux';
import { setMoves, setDisplayMoves, setCardsList, setFoundCards } from '../actions/FieldActions';

//Components
import Card from '../components/Card';
import Counter from '../components/Counter';

//Images
import artuhov from '../img/s_artuhov.jpeg';
import azarov from '../img/s_azarov.jpeg';
import burkov from '../img/s_burkov.jpeg';
import civilev from '../img/s_civilev.jpeg';
import moor from '../img/s_moor.jpeg';
import nikitin from '../img/s_nikitin.jpeg';
import nikolaev from '../img/s_nikolaev.jpeg';
import nosov from '../img/s_nosov.jpeg';


class Field extends Component {

    constructor(props) {
        super(props)
        this.state = {
            prevCard: null,
        }

        this.styles = {
            hideCard: 'card_hide',
            activeCard: 'card_active'
        }
    }

    clickHandler (e) {
        const moves = this.props.field.moves;
        const card = e.currentTarget;
        let success;

        const isAllowUpdate = this.checkForUpdateMoves(card);

        if (isAllowUpdate) {
            this.updateMoves(moves);
            this.setActiveCard(card);
            success = this.checkCouple(card);
        }

        if (success) {
            this.hideCards(card);
            this.foundCards();
        }
    }

    updateMoves (moves) {
        let displayMoves = this.props.field.displayMoves;
        moves += 1;

        this.props.setMoves(moves);

        if (moves % 2 === 0) {
            displayMoves += 1;
            this.props.setDisplayMoves(displayMoves);
        }
    }

    checkForUpdateMoves (card) {
        const prevCard = this.state.prevCard;
        return (!prevCard || prevCard.id !== card.id) ? true : false;
    }

    checkCouple (card) {
        const prevActiveCard = this.state.prevCard;
        return ( prevActiveCard && prevActiveCard.id[0] === card.id[0] ) ? true : false;
    }

    hideCards (card) {
        const prevActiveCard = this.state.prevCard;
        const hideCard = this.styles.hideCard;
        card.classList.add(hideCard);
        prevActiveCard.classList.add(hideCard);
        return true;
    }

    foundCards () {
        let { foundCards } = this.props.field;
        foundCards += 1;
        this.props.setFoundCards(foundCards);
        this.checkEndGame(foundCards);
        return foundCards;
    }

    checkEndGame (foundCards) {
        const { displayMoves } = this.props.field;
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
        const prevActiveCard = this.state.prevCard;
        const activeCard = this.styles.activeCard;

        if (prevActiveCard) {
            prevActiveCard.classList.remove(activeCard);
        }

        card.classList.add(activeCard);

        this.setState({
            prevCard: card
        })
    }

    prepareCard (card, num) {
        const key = card.id + '' + num;
        return (
            <Card key={key} id={key} card={card.src} onClick={this.clickHandler.bind(this)}></Card>
        )
    }

    randomazeArr () {
        const num = parseInt(Math.random() * 10)
        return num > 4 ? 1 : 0
    }

    componentDidMount () {
        const cardsListFirstPart = this.props.field.cardSymbols.map(card => this.prepareCard(card, 0));
        const cardsListSecondPart = this.props.field.cardSymbols.map(card => this.prepareCard(card, 1));
        const cardsList = [...cardsListFirstPart, ...cardsListSecondPart].sort(this.randomazeArr);

        this.props.setCardsList(cardsList)
    }

    render () {
        return (
            <div className='field'>
                <Counter moves={this.props.field.displayMoves}/>
                {this.props.field.cardsList}
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
        setFoundCards: foundCards => dispatch(setFoundCards(foundCards))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Field)
