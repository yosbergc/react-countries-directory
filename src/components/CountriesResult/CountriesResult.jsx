import './CountriesResult.css'
import { SingleCountryContainer } from '../SingleCountryContainer/SingleCountryContainer'
import Countries from '../../mockups/response.json'

function CountriesResult() {
    return <section className='countries-result'>
        <section className='countries-result-header'>
            <h4>Flag</h4>
            <h4>Name</h4>
            <h4 className='isMobile'>Population</h4>
            <h4 className='isMobile'>Area (km²)</h4>
        </section>
        <SingleCountryContainer countryList={Countries}/>
    </section>
}
export { CountriesResult }