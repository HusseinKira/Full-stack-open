const Filter =(props) =>{
  const filtered= props.substring===''?[]:props.persons.filter((person)=> person.name.toLowerCase().includes(props.filter.toLowerCase()))
  const filterdlist= filtered.map((person)=><div key={person.id}>{person.name} {person.number} </div> )
 
  return(<>
      
    {filterdlist} 
   </>)

}

export default Filter