
import phoneservices from '../services/phoneservices'

const Addnew = (props) =>{
  
  const addcontact = (event) =>{
    event.preventDefault()
    const names= props.persons.map((person)=>person.name)
   
  
    
  if (names.includes(props.newName)){
      if(window.confirm(`${props.newName} is already added to phonebook do u want to replace the number`)) {
      const tempcontact= props.persons.find(person=>person.name.includes(props.newName))
      const newcontact={...tempcontact,number:props.newNumber}
      phoneservices
      .update(tempcontact.id,newcontact)
      .then(response=>{props.setPersons(props.persons.map(contact=>contact.id===tempcontact.id?response:contact))})
      props.setNewName('')
      props.setnewNumber('')
      }

  }
  
  else{
    
 const newobj = {name: props.newName,number:props.newNumber, }

 phoneservices
.create(newobj)
.then(response=>props.setPersons(props.persons.concat(response)))

 props.setNewName('')
 props.setnewNumber('')
  }
 }

//changing input state//
 const inputname = (event)=> props.setNewName(event.target.value)
 const inputnumber = (event)=> props.setnewNumber(event.target.value)

//el return//


return( <form onSubmit={addcontact}>

  <h2>add a new</h2>
  <div>  name: <input  value={props.newName} onChange={inputname}/></div>
  <div> number: <input type='number' value={props.newNumber} onChange={inputnumber} /></div>
 
 <div>
    <button type="submit">add</button>
    
  </div>
</form>)


}

export default Addnew