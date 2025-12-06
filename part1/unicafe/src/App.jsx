import { useState } from 'react'

const Header = () => {
  return (
    <div>
      <h1>give feedback</h1>
    </div>
  )
}

const Content = () => {
  return (
    <div>
      <h1>statistics</h1>
    </div>
  )
}

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  
  )
}

const Statistics = (props) => {
  if (!(props.good || props.neutral || props.bad)){
    return (
    <p>No feedback given</p>
    )
  }
  return (
    <div>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value={props.good + props.neutral + props.bad} />
      <StatisticLine text="average" value={(props.good - props.bad) / (props.good + props.neutral + props.bad)} />
      <StatisticLine text="positive" value={(props.good * 100) / (props.good + props.neutral + props.bad) + " %"} />
    </div>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClicks = () => {
    setGood(good + 1)
  }
  const neutralClicks = () => {
    setNeutral(neutral + 1)
  }
  const badClicks = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header />
      <Button handleClick = {goodClicks} text="good"/>
      <Button handleClick = {neutralClicks} text="neutral"/>
      <Button handleClick = {badClicks} text="bad"/>
      <Content />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App