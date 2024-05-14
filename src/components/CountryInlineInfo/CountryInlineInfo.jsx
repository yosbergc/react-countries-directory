import './countryinlineinfo.css'
function CountryInlineInfo ({title, value}) {
    let renderInfo;
    if (typeof value === "string") {
        renderInfo = value;
    }
    if (Array.isArray(value)) {
        renderInfo = value.toString()
    } else if (typeof value === "object") {
        renderInfo = Object.values(value)
        .map(elem => {
            if (typeof elem === 'object') {
            return elem.name;
            } else {
            return elem
        }
    }).toString()

    }
    return (
        <section className="inline-info-single">
            <p className="title">{title}</p>
            <p className="value">{renderInfo}</p>
        </section>
    )
}
export { CountryInlineInfo }