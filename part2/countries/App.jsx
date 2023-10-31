
import { useState, useEffect } from 'react'
import countriesService from './services/countries'
import Search from './components/Countries'


const App = () => {

  const [countries, setCountries] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [filteredCountries, setFilteredCountries] = useState([])
  const [showContent, setShowContent] = useState(false)



  useEffect(() => {
    countriesService
      .getAll()
      .then((country) => {
        setCountries(country)
      })
  }, [])




  const search = (event) => {
    const searchTerm = event.target.value
    setSearchInput(searchTerm)
    const filtered = countries.filter((country) => country.name.common.toLowerCase().includes(searchTerm.toLowerCase()))
    setFilteredCountries(filtered)




  }





  return (

    <div>

      <Search search={search} searchInput={searchInput} filteredCountries={filteredCountries} showContent={showContent} setShowContent={setShowContent} />



    </div>




  )



}


export default App

