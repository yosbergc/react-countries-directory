import './App.css'
import { Header } from './components/Header/Header'
import { CountryCounter } from './components/CountryCounter/CountryCounter'
import { Search } from './components/Search/Search'
import { Sorted } from './components/Sorted/Sorted'
import { Regions } from './components/Regions/Regions'
import { Status } from './components/Status/Status'
import { CountriesResult } from './components/CountriesResult/CountriesResult'
import { useCountries } from './hooks/useCountries'
import { Loading } from './components/Loading/Loading'
function App() {
  const { filteredCountries, changeOrder, filteredLength, searchCountry, isUnitedNationsMember, isIndependent, changeRegion, isLoading} = useCountries()
  return (
    <>
      <Header/>
      <main>
        <section className="top-section">
          <CountryCounter filteredLength={filteredLength}/>
          <Search onChange={searchCountry}/>
        </section>
        <section className="main-app">
          <section className="filters">
            <Sorted onChange={changeOrder}/>
            <Regions onChange={changeRegion} />
            <Status onUNChange={isUnitedNationsMember} onIndependentChange={isIndependent}/>
          </section>
          {isLoading ? <Loading/>  : <CountriesResult filteredCountries={filteredCountries}/>}
        </section>
      </main>
    </>
  )
}

export default App
