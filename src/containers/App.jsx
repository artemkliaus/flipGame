import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPopupView, setResult } from '../actions/AppActions.js';


//COMPONENTS
import Field from './Field';
import Popup from '../components/Popup';

class App extends Component {
    constructor (props) {
        super(props);
    }

    showResult (moves) {
        const result = moves;
        this.props.setResult(result);
        this.props.setPopupView('end');
    }

    popupHandler (acton) {
        this.props.setPopupView(acton);
    }

    render() {
        const { app } = this.props;
        return (
            <div className='App'>
                <Popup result={app.result} popupHandler={this.popupHandler.bind(this)} view={app.popupView}/>
                <Field showResult={this.showResult.bind(this)}/>
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        app: store.app
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setPopupView: popupView => dispatch(setPopupView(popupView)),
        setResult: result => dispatch(setResult(result))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
