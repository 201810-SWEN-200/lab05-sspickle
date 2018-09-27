import * as React from 'react';
import './App.css';

class App extends React.Component {
  public render() {
    return (
        <table>
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
    );
  }
}

export default App;
