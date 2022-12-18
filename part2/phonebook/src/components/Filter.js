const Filter =(props) =>{
  const filtered= props.substring===''?[]:props.persons.filter((person)=> person.name.toLowerCase().includes(props.filter.toLowerCase()))
  const filterdlist= filtered.map((person)=><div key={person.id}>{person.name} {person.number} </div> )
 
  return(<>
    <h3>filtered names:</h3>
    {filterdlist} 
   </>)

}

export default Filter