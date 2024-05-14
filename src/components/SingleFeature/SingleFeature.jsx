import './SingleFeature.css'
function SingleFeature({title, value}) {
    function numberWithCommas(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return (
        <section className="single-feature-country">
            {title}
            <div className='single-feature-separator'></div>
            {numberWithCommas(value)}
        </section>
    )
}
export { SingleFeature }