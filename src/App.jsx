import React, { Component } from 'react';
import './App.css';

//COMPONENTS
import Field from './containers/Field';
import Popup from './components/Popup';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            result: null,
            popupView: 'start'
        }
    }

    showResult (moves) {
        const popupView = this.state.popupView;
        const result = moves;
        this.setState({result});
        this.setState({
            popupView: 'end'
        });
    }

    popupHandler (e) {
        const button = e.target.id;
        const popupView = this.state.popupView;
        console.log(button);

        if (button === 'start') {
            this.setState({
                popupView: 'hide'
            })
        }

        if (button === 'rules') {
            this.setState({
                popupView: 'rules'
            })
        }
    }

    render() {
        return (
            <div className='App'>
                <Popup result={this.state.result} popupHandler={this.popupHandler.bind(this)} view={this.state.popupView}/>
                <Field showResult={this.showResult.bind(this)}/>
            </div>
        );
    }
}

export default App;
