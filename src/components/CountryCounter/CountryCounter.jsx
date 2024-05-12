import './CountryCounter.css'
function CountryCounter({ filteredLength }) {
 return <section className='counter'>
    <p>Found {filteredLength} Countries</p>
 </section>
}
export { CountryCounter }