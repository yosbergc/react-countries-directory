import './closecountry.css'
function CloseCountry ({countrySrc, countryName, onClick}) {
    return (
        <section className="closeCountry" onClick={onClick}>
            <img src={countrySrc} alt={countryName}/>
            <p>{countryName}</p>
        </section>
    )
}
export { CloseCountry }