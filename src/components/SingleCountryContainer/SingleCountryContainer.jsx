import { SingleCountryOverview } from "../SingleCountryOverview/SingleCountryOverview"
import './singlecountrycontainer.css'
function SingleCountryContainer({ countryList }) {
    return (
        <section className="single-country-container">
        {countryList.map(country => {
            return <SingleCountryOverview
                name={country.name.common}
                population={country.population}
                area={country.area}
                flagSrc={country.flags.svg}
                key={country.name.common}
            />
        })}
        </section>
    )
}
export { SingleCountryContainer }