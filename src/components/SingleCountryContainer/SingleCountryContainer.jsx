import { SingleCountryOverview } from "../SingleCountryOverview/SingleCountryOverview"
import { useNavigate } from "react-router-dom"
import './singlecountrycontainer.css'
function SingleCountryContainer({ countryList }) {
    const navigate = useNavigate()
    
    return (
        <section className="single-country-container">
        {countryList.map(country => {
            return <SingleCountryOverview
                name={country.name.common}
                population={country.population}
                area={country.area}
                flagSrc={country.flags.svg}
                key={country.name.common}
                onClick={() => navigate(`/country/${country.name.common}`)}
            />
        })}
        </section>
    )
}
export { SingleCountryContainer }