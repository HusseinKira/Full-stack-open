const Courses = ({courses}) => {
  const course = courses.map((course)=>{
    const part = course.parts.map((part)=> <p key={part.id}> {part.name} {part.exercises} </p> );
    const sum =course.parts.reduce((a,b)=> {return(a+b.exercises)},0)
  return(
    <div>
    <h2 key={course.id}> {course.name}  </h2>
    <p>{part}</p>
    <b>total of {sum} exercises</b>
    </div>
  
  
  )
  
  })

  return(
  <>
       {course}
       
  </>
 )

}

export default Courses