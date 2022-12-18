
import phoneservices from "../services/phoneservices"

const Display = ({persons,setPersons})=> {
 const remove =(person) =>{
   if (window.confirm('Are u sure u want to delete ?')){
   
    phoneservices
   .remove (person.id)
   const updatelist=persons.filter((personnew)=>personnew.id!==person.id)
   setPersons(updatelist)
   }}


    const list = persons.map((person)=>{
      
      
      return(<div key={person.id}>{person.name} {person.number} <button onClick={()=> remove(person)}> delete </button></div>)} )
  
   return (
    <><h3>Numbers</h3>
       {list}
    </>)
  
  }

  export default Display