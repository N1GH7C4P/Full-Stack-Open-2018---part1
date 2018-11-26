import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
    constructor() {
      
      super()
      this.state = {
        pos: 0,
        neg: 0,
        neut: 0
      }
    }
    render() {
      return (
        <div>
          <h1>Anna palautetta</h1>
          <div>
            <button onClick={() => this.setState({ 
              pos: this.state.pos + 1})}>
              Hyvä
            </button>
            <button onClick={() => this.setState({ 
              neut: this.state.neut + 1})}>
              Neutraali
            </button>
            <button onClick={() => this.setState({ 
              neg: this.state.neg + 1})}>
              Huono
            </button>
          </div>
          <h2>Statistiikka</h2>
          <div>Positiivinen: {this.state.pos}</div>
          <div>Neutraali: {this.state.neut}</div>
          <div>Negatiivinen: {this.state.neg}</div>
          <div>Keskiarvo: {(this.state.pos - this.state.neg) / (this.state.pos + this.state.neg + this.state.neut)}</div>
          <div>Positiivisia: {this.state.pos / (this.state.pos + this.state.neg + this.state.neut)*100}%</div>
        </div>
      )
    }
  }
ReactDOM.render(<App />, document.getElementById('root'));