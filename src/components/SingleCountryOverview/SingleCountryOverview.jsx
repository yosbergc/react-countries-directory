import './SingleCountryOverview.css'
function SingleCountryOverview({flagSrc, name, population, area}) {
    return (
        <section className='single-country-overview'>
            <img src={flagSrc} />
            <p>{name}</p>
            <p className='isMobile'> {population}</p>
            <p className='isMobile'>{area}</p>
        </section>
    )
}
export { SingleCountryOverview }