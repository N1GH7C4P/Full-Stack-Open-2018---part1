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
            <table>
              <tr>
                <td>Positiivisia: </td>
                <td>{this.state.pos}</td>
              </tr>
              <tr>
                <td>Negatiivisia: </td>
                <td>{this.state.neg}</td>
              </tr><tr>
                <td>Neutraaleja: </td>
                <td>{this.state.neut}</td>
              </tr><tr>
                <td>Keskiarvo: </td>
                <td>{(this.state.pos - this.state.neg) / (this.state.pos + this.state.neg + this.state.neut)}</td>
              </tr><tr>
                <td>Positiivisten osuus: </td>
                <td>{this.state.pos / (this.state.pos + this.state.neg + this.state.neut)*100}</td>
              </tr>
            </table>
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