import { useState } from 'react'


const Statistic = ({ good, neutral, bad }) => {

  const total = good + bad + neutral
  const average = (good * 1 + neutral * 0 + bad * -1) / total
  const positive = (good / total) * 100


  if (total === 0) {


    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given yet.</p>
      </div>

    )

  }
  else {

    return (
      <div>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="total" value={total} />
            <StatisticLine text="average" value={average} />
            <StatisticLine text="positive" value={`${positive} %`} />
          </tbody>
        </table>
      </div>

    )
  }

}

const StatisticLine = ({ text, value }) => {
  return (

    <p>{text}:{value}</p>

  )

}


const Button = ({ text, handleClick }) => {

  return <button onClick={handleClick}>{text}</button>

}


const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  return (
    <div>

      <h1>give feedback</h1>
      <Button text="good" handleClick={() => setGood(good + 1)} />
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" handleClick={() => setBad(bad + 1)} />
      <Statistic
        good={good}
        neutral={neutral}
        bad={bad} />


    </div>
  )
}

export default App
