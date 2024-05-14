import './CountryPage.css'
import { useParams } from "react-router-dom"
import { Header } from "../../components/Header/Header"
import { useSingleCountry } from '../../hooks/useSingleCountry'
import { SingleHeader } from '../../components/SingleHeader/SingleHeader'
import { SingleFeature } from '../../components/SingleFeature/SingleFeature'
function CountryPage() {
    const { country } = useParams()
    const {singleCountrySelected, loading, error} = useSingleCountry(country)
    console.log(singleCountrySelected)
    return (<>
        <Header/>
        <main>
            <section className="top-header-single">
                {
                !loading && !error && 
                <SingleHeader
                countryFlag={singleCountrySelected.flags.png}
                countryName={singleCountrySelected.name.common}
                countryAlternativeName={singleCountrySelected.name.official}
                />
                }
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
        </main>
    </>)
}
export {CountryPage}