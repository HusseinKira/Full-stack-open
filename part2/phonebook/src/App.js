import { useState, useEffect } from 'react'
import Addnew from './components/Addnew'
import phoneservices from './services/phoneservices'
import Display from './components/Display'
import Filter from './components/Filter'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber,setnewNumber] =useState('')
  const [filter,setfilter] = useState('')

 useEffect(()=>{
 phoneservices
 .getAll()
 .then(response => {setPersons(response)})
 
  },[])

  
  const inputfilter =(event)=> setfilter(event.target.value)

  
  const list = filter===''?<Display  persons={persons} setPersons={setPersons}/>:<Filter  filter={filter} persons={persons}/>


  return (
    <div>
 
 <form > 
 <h2>Phonebook</h2>
  <div>  filter showen with <input  value={filter} onChange={inputfilter}/></div>
  </form>
      
    <Addnew  newName={newName}  newNumber={newNumber}persons={persons} setPersons={setPersons} 
     setNewName= {setNewName} setnewNumber={setnewNumber} 
    
    />
        
       {list}
        
      
 
    </div>

   
  )
}

export default App
