import './SingleCountryOverview.css'
function SingleCountryOverview({flagSrc, name, population, area}) {
    function numberWithCommas(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return (
        <section className='single-country-overview'>
            <img src={flagSrc} />
            <p>{name}</p>
            <p className='isMobile'> {numberWithCommas(population)}</p>
            <p className='isMobile'>{numberWithCommas(area)}</p>
        </section>
    )
}
export { SingleCountryOverview }