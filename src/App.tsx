import * as React from 'react';
import './App.css';

class ButtonControl extends React.Component<{onButton:() => void}> {
    public render() {
        return (<input type="button" onClick={this.props.onButton} value="Click me"/>)
    }
}

class ColorTable extends React.Component<{doGreen:boolean}> {
    public render() {
        return (
        <table className={this.props.doGreen? 'App-green' : 'App-red'}>
            <thead>
                <tr><th>Number</th><th>Name</th></tr>
            </thead>
            <tbody>
                <tr><td>0</td><td>Amy</td></tr>
                <tr><td>1</td><td>Joe</td></tr>
                <tr><td>2</td><td>Sam</td></tr>
                <tr><td>3</td><td>Fred</td></tr>
                <tr><td>4</td><td>Julie</td></tr>
            </tbody>
        </table>
        )
    }
}

class Combo extends React.Component<{},{buttonState:boolean}> {

    constructor(props:any) {
        super(props)
        this.state = {buttonState:false}
        this.handleButtonClick = this.handleButtonClick.bind(this)
    }
    
    handleButtonClick() {
        this.setState({buttonState:!this.state.buttonState})
    }
    
    public render() {
        return (
            <div>
            <ButtonControl onButton={this.handleButtonClick}/>
            <ColorTable doGreen={this.state.buttonState}/>
            </div>
        );
    }

}

class App extends React.Component {
    public render() {
        return (
            <Combo/>
        )
    }
}

export default App;
