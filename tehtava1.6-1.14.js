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

  plusPos = () => {
    this.setState({
      pos: this.state.pos + 1
    })
  }
  plusNeut = () => {
    this.setState({
      neut: this.state.neut + 1
    })
  }
  plusNeg = () => {
    this.setState({
      neg: this.state.neg + 1
    })
  }

  render() {

    const Statistic = ({ text, counter }) => <div>{text} {counter}</div>

    const Button = ({ handleClick, text }) => (

      <button onClick={handleClick}>
        {text}
      </button>
    )

    const Statistics = () => {
      if(this.state.pos + this.state.neg + this.state.neut === 0){
        return(<div>ei yhtään palautetta annettu</div>)
      }
      else{
        return(
          <div>
            <h1>Statistics</h1>
            <Statistic counter={this.state.pos} text="Positiivisia: "/>
            <Statistic counter={this.state.neut} text="Negatiivisia: "/>
            <Statistic counter={this.state.neg} text="Neutraaleja: "/>
            <Statistic counter={(this.state.pos - this.state.neg) / (this.state.pos + this.state.neg + this.state.neut)} text= "Keskiarvo: "/>
            <Statistic counter={this.state.pos / (this.state.pos + this.state.neg + this.state.neut)*100} text= "Positiivisten osuus: "/>
          </div>
        )
      }
    }
    return (
      <div>
        <div>
            <h1>Anna palautetta</h1>
            <Button
            handleClick={this.plusPos}
            text="Hyvä"
            />
            <Button
            handleClick={this.plusNeut}
            text="Neutraali"
            />
            <Button
            handleClick={this.plusNeg}
            text="Huono"
            />
            <Statistics/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));