import { useState } from 'react'



const Button = ({onClick,text}) => <button onClick={onClick}> {text} </button>
const StatisticLine= (props) => <div> {props.text} {props.counter}  </div>


const Statistics = ({good,bad,neutral}) => {

  if (bad+good+neutral===0){
return(
    <div>No feedback given</div>)
  }
else {
return(
<>
<StatisticLine text = 'good' counter= {good} />
 <StatisticLine text = 'nuetral' counter= {neutral} />
 <StatisticLine text = 'bad' counter= {bad} />
<StatisticLine text = 'all' counter= {bad+good+neutral} />
<StatisticLine text = 'avg' counter= {((good-bad)/(bad+good+neutral))} />
<StatisticLine text = 'positive' counter= {((good/(bad+good+neutral))*100)+'%'} />

</>

) }
}



const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const  goodplus = () => setGood(good + 1)
  const  neutralplus = () => setNeutral(neutral + 1)
  const  badplus = () =>  setBad(bad + 1)
  

  return (
    <div>
       <h1>give feedback</h1>
       
       <Button onClick={goodplus} text='good'/>
       <Button onClick={neutralplus} text='neutral'/>
       <Button onClick={badplus} text='bad'/>
      
      <h1>stats</h1>

      
      <Statistics good={good} bad={bad} neutral={neutral} />
      
       

    </div>
  )
}

export default App