import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14

  return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto osa1={osa1} tehtavia1={tehtavia1} osa2={osa2} tehtavia2={tehtavia2} osa3={osa3} tehtavia3={tehtavia3} />
      <Yhteensa tehtavia1={tehtavia1} tehtavia2={tehtavia2} tehtavia3={tehtavia3} />
    </div>
  )
}
const Otsikko = (props) => {
  return (
    <h1>{props.kurssi}</h1>
  )
}
const Osa = (props) => {
    return (
        <p>{props.osa} {props.tehtavia}</p> 
    )
}
const Sisalto = (props) => {
  return (
    <div>
      <p><Osa osa={props.osa1} tehtavia={props.tehtavia1}/></p>
      <p><Osa osa={props.osa2} tehtavia={props.tehtavia3}/></p>
      <p><Osa osa={props.osa3} tehtavia={props.tehtavia3}/></p>
    </div>
  )
}
const Yhteensa = (props) => {
  return (
    <p>yhteensä {props.tehtavia1 + props.tehtavia2 + props.tehtavia3} tehtävää</p>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)