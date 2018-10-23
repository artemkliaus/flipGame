import React, { Component } from 'react'
import '../styles/Field.sass'

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
            cardSymbols: [
                {src: artuhov, id: 0},
                {src: azarov, id: 1},
                {src: burkov, id: 2},
                {src: civilev, id: 3},
                {src: moor, id: 4},
                {src: nikitin, id: 5},
                {src: nikolaev, id: 6},
                {src: nosov, id: 7}
            ],
            moves: 0,
            displayMoves: 0,
            cardsList: null,
            prevCard: null,
            findedCards: 0
        }

        this.styles = {
            hideCard: 'card_hide',
            activeCard: 'card_active'
        }
    }

    clickHandler (e) {
        const moves = this.state.moves;
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
            this.findedCards();
        }
    }

    updateMoves (moves) {
        let displayMoves = this.state.displayMoves;

        this.setState({
            moves: ++moves
        });

        if (moves % 2 === 0) {
            this.setState({
                displayMoves: ++displayMoves
            });
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

    findedCards () {
        let findedCards = this.state.findedCards;
        findedCards += 1;
        this.setState({
            findedCards
        }, this.checkEndGame);
        return findedCards;
    }

    checkEndGame () {
        const displayMoves = this.state.displayMoves;
        const findedCards = this.state.findedCards;

        if (findedCards === 8) {
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
        const cardsListFirstPart = this.state.cardSymbols.map(card => this.prepareCard(card, 0));
        const cardsListSecondPart = this.state.cardSymbols.map(card => this.prepareCard(card, 1));
        const cardsList = [...cardsListFirstPart, ...cardsListSecondPart].sort(this.randomazeArr);

        this.setState({cardsList})
    }

    render () {
        return (
            <div className='field'>
                <Counter moves={this.state.displayMoves}/>
                {this.state.cardsList}
            </div>
        );
    }
}

export default Field;
