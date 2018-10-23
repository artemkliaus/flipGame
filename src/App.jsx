import React, { Component } from 'react';
import './App.css';

//COMPONENTS
import Field from './containers/Field';
import Popup from './components/Popup';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            result: null
        }
    }

    showResult (moves) {
        const result = moves;
        this.setState({result});
    }

    render() {
        return (
            <div className='App'>
                <Popup result={this.state.result}/>
                <Field showResult={this.showResult.bind(this)}/>
            </div>
        );
    }
}

export default App;
