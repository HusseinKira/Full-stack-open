import { useState ,useEffect} from 'react'
import axios from 'axios'



const Dispcountry =(props) =>{
if(props.filteredCountries.length > 10){
  
  return(

<p> too many matches</p>


  )


} 


}

const App = () => {
 const [dataofcountries,setcountries] = useState ([]) 
 const [filter,setfilter] = useState('')
 useEffect(()=>{
  axios
  .get('https://restcountries.com/v3.1/all')
 
  .then(response=>{
   
  setcountries(response.data)})
  
    },[])

    const inputfilter =(event)=> setfilter(event.target.value)
  
   const filteredCountries =  filter === '' ? [] : dataofcountries.filter((dataofcountries)=> dataofcountries.name.toLowerCase().includes(filter))
 
    
     return(<div>
     <form > 
   
   <div>  search <input  value={filter} onChange={inputfilter}/></div>

    </form>
   <div><Dispcountry filteredCountries={filteredCountries} /></div>
   
         
      </div>)

  
  
}

export default App;
