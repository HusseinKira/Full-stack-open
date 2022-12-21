import { useState, useEffect } from 'react'
import Addnew from './components/Addnew'
import phoneservices from './services/phoneservices'
import Display from './components/Display'
import Filter from './components/Filter'
import Notification from './components/Notification'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber,setnewNumber] =useState('')
  const [filter,setfilter] = useState('')
  const [message,setmessage] = useState(null)
  const [text,settext]=useState('')

 useEffect(()=>{
 phoneservices
 .getAll()
 .then(response => {setPersons(response)})
 
  },[])

  
  const inputfilter =(event)=> setfilter(event.target.value)

  
  const list = filter===''?<Display  persons={persons} setPersons={setPersons} setmessage={setmessage} settext={settext}/>:<Filter  filter={filter} persons={persons} />


  return (
    <div>
 <Notification message={message} text={text} />
 <form > 
 <h2>Phonebook</h2>
  <div>  filter showen with <input  value={filter} onChange={inputfilter}/></div>
  </form>
      
    <Addnew  newName={newName}  newNumber={newNumber}persons={persons} setPersons={setPersons} 
     setNewName= {setNewName} setnewNumber={setnewNumber}  setmessage={setmessage} settext={settext}
    
    />
        
       {list}
        
      
 
    </div>

   
  )
}

export default App
