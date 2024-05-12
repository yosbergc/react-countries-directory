import './App.css'
import { Header } from './components/Header/Header'
import { CountryCounter } from './components/CountryCounter/CountryCounter'
import { Search } from './components/Search/Search'
import { Sorted } from './components/Sorted/Sorted'
import { Regions } from './components/Regions/Regions'
import { Status } from './components/Status/Status'
import { CountriesResult } from './components/CountriesResult/CountriesResult'
import { useCountries } from './hooks/useCountries'
function App() {
  const { filteredCountries } = useCountries()
  return (
    <>
      <Header/>
      <main>
        <section className="top-section">
          <CountryCounter />
          <Search />
        </section>
        <section className="main-app">
          <section className="filters">
            <Sorted />
            <Regions />
            <Status />
          </section>
          <CountriesResult filteredCountries={filteredCountries}/>
        </section>
      </main>
    </>
  )
}

export default App
