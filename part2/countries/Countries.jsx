

const Search = ({ searchInput, search, filteredCountries, showContent, setShowContent }) => {


    return (
        <>
            <form>
                find countries
                <input value={searchInput} onChange={search} />
            </form>

            {filteredCountries.length > 10 &&

                <p>Too many matches, try another filter.</p>

            }
            {filteredCountries.length === 1 &&

                filteredCountries.map((country) => (
                    <div key={country.flag}>
                        <h1>{country.name.common}</h1>
                        <h5>Capital: {country.capital}</h5>
                        <h5>Area: {country.area}</h5>
                        <h3>Languages:</h3>
                        <ul>
                            {Object.values(country.languages).map((language, index) => (
                                <li key={index}>{language}</li>
                            ))}
                        </ul>
                        <h1>{country.flag}</h1>
                    </div>
                ))
            }

            {filteredCountries.length > 1 && filteredCountries.length < 10 && (
                <div>
                    {filteredCountries.map((country) => (
                        <div key={country.flag}>
                            <h1>{country.name.common}</h1>
                            <button onClick={() => setShowContent(true)}>Show</button>
                            {showContent && (
                                <div>
                                    <h5>Capital: {country.capital}</h5>
                                    <h5>Area: {country.area}</h5>
                                    <h3>Languages:</h3>
                                    <ul>
                                        {Object.values(country.languages).map((language, index) => (
                                            <li key={index}>{language}</li>
                                        ))}
                                    </ul>
                                    <h1>{country.flag}</h1>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}



        </>
    )
}





export default Search




