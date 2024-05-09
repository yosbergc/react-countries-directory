import './App.css'
import { Header } from './components/Header/Header'
import { CountryCounter } from './components/CountryCounter/CountryCounter'
import { Search } from './components/Search/Search'
function App() {

  return (
    <>
      <Header/>
      <main>
        <section className="top-section">
          <CountryCounter />
          <Search />
        </section>
      </main>
    </>
  )
}

export default App
