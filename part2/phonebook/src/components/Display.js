
import phoneservices from "../services/phoneservices"

const Display = ({persons,setPersons,setmessage,settext})=> {
 const remove =(person) =>{
   if (window.confirm('Are u sure u want to delete ?')){
    
    phoneservices
   .remove (person.id)
   .catch(error => {
    settext('error')
    setmessage(`${person.name} has already been removed`)
    setTimeout(() => {setmessage(null)}, 5000)
  })
   const updatelist=persons.filter((personnew)=>personnew.id!==person.id)
   setPersons(updatelist)
   }}


    const list = persons.map((person)=>{
      
      
      return(<div key={person.id}>{person.name} {person.number} <button onClick={()=> remove(person)}> delete </button></div>)} )
  
   return (
    <><h3>Numbers:</h3>
       {list}
    </>)
  
  }

  export default Display