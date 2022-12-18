
const Filter =(props) =>{
 const filteredCountries = props.filter === '' ? [] : props.dataofcountries.filter((dataofcountries)=> dataofcountries.name.includes(props.filter))
  return filteredCountries
}

export default Filter