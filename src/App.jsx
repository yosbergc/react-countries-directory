import './App.css'
import { Header } from './components/Header/Header'
import { CountryCounter } from './components/CountryCounter/CountryCounter'
import { Search } from './components/Search/Search'
import { Sorted } from './components/Sorted/Sorted'
import { Regions } from './components/Regions/Regions'
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
          </section>
          <section className="countries">

          </section>
        </section>
      </main>
    </>
  )
}

export default App
