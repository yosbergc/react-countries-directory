import './App.css'
import { Header } from './components/Header/Header'
import { CountryCounter } from './components/CountryCounter/CountryCounter'
import { Search } from './components/Search/Search'
import { Sorted } from './components/Sorted/Sorted'
import { Regions } from './components/Regions/Regions'
import { Status } from './components/Status/Status'
function App() {

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
          <section className="countries">

          </section>
        </section>
      </main>
    </>
  )
}

export default App
