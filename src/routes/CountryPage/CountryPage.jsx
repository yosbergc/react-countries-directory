import './CountryPage.css'
import { useParams } from "react-router-dom"
import { Header } from "../../components/Header/Header"
import { useSingleCountry } from '../../hooks/useSingleCountry'
import { SingleHeader } from '../../components/SingleHeader/SingleHeader'
import { SingleFeature } from '../../components/SingleFeature/SingleFeature'
import { CountryInlineInfo } from '../../components/CountryInlineInfo/CountryInlineInfo'
function CountryPage() {
    const { country } = useParams()
    const {singleCountrySelected, loading, error} = useSingleCountry(country)
    console.log(singleCountrySelected)
    return (<>
        <Header/>
        <main>
        {
            !loading && !error && 
            <section className="top-header-single">
                <SingleHeader
                countryFlag={singleCountrySelected.flags.png}
                countryName={singleCountrySelected.name.common}
                countryAlternativeName={singleCountrySelected.name.official}
                />
                <section className='features'>
                    <SingleFeature
                    title={"Population"}
                    value={singleCountrySelected.population}
                    />
                    <SingleFeature
                    title={"Area (km²)"}
                    value={singleCountrySelected.area}
                    />
                </section>
            </section>
        }
        {
        !loading && !error && 
        <section className='single-country-body'>
            <CountryInlineInfo
            title={"Capital"}
            value={singleCountrySelected.capital}
            />
            <CountryInlineInfo
            title={"Subregion"}
            value={singleCountrySelected.subregion}
            />
            <CountryInlineInfo
            title={"Languages"}
            value={singleCountrySelected.languages}
            />
            <CountryInlineInfo
            title={"Currencies"}
            value={singleCountrySelected.currencies}
            />
            <CountryInlineInfo
            title={"Continents"}
            value={singleCountrySelected.continents}
            />
        </section>
        }
        </main>
    </>)
}
export {CountryPage}