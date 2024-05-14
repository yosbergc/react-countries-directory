import './SingleHeader.css'
function SingleHeader ({ countryName, countryFlag, countryAlternativeName }) {
    return (
        <section className='SingleHeader'>
            <img src={countryFlag} alt={countryName}/>
            <h2>{countryName}</h2>
            <h4>{countryAlternativeName}</h4>
        </section>
    )
}
export { SingleHeader }