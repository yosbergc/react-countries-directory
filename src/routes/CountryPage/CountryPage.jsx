import './CountryPage.css'
import { useParams } from "react-router-dom"
import { Header } from "../../components/Header/Header"
import { useSingleCountry } from '../../hooks/useSingleCountry'
import { SingleHeader } from '../../components/SingleHeader/SingleHeader'
import { SingleFeature } from '../../components/SingleFeature/SingleFeature'
import { CountryInlineInfo } from '../../components/CountryInlineInfo/CountryInlineInfo'
import { CloseCountry } from '../../components/CloseCountry/CloseCountry'
import { useNavigate } from 'react-router-dom'
function CountryPage() {
    const { country } = useParams()
    const {singleCountrySelected, loading, error, closeCountries} = useSingleCountry(country)
    const navigate = useNavigate()
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
            <hr className='single'/>
            <CountryInlineInfo
            title={"Capital"}
            value={singleCountrySelected.capital}
            />
            <hr className='single'/>
            <CountryInlineInfo
            title={"Subregion"}
            value={singleCountrySelected.subregion}
            />
            <hr className='single'/>
            <CountryInlineInfo
            title={"Languages"}
            value={singleCountrySelected.languages}
            />
            <hr className='single'/>
            <CountryInlineInfo
            title={"Currencies"}
            value={singleCountrySelected.currencies}
            />
            <hr className='single'/>
            <CountryInlineInfo
            title={"Continents"}
            value={singleCountrySelected.continents}
            />
            <hr className='single'/>
        </section>
        }
        <section className='neightbouring'>
            <h5>Neightbouring Countries</h5>
            <section className="close-countries-container">
                {closeCountries && closeCountries.map(country => {
                    return <CloseCountry 
                    key={country.name.common}
                    countryName={country.name.common}
                    countrySrc={country.flags.png}
                    onClick={() => {
                        window.scrollTo({
                            top: 0
                        })
                        navigate(`/country/${country.name.common.toLowerCase()}`)
                    }}
                    />
                })}
            </section>
        </section>
        </main>
    </>)
}
export {CountryPage}