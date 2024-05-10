import './regions.css'
function Regions () {
    return (
        <section className="region-filter">
            <h3>Region</h3>
            <input type="checkbox" name="americas" id="americas" />
            <label htmlFor="americas">Americas</label>
            <input type="checkbox" name="antarctic" id="antarctic" />
            <label htmlFor="antarctic">Antarctic</label>
            <input type="checkbox" name="africa" id="africa" />
            <label htmlFor="africa">Africa</label>
            <input type="checkbox" name="asia" id="asia" />
            <label htmlFor="asia">Asia</label>
            <input type="checkbox" name="europe" id="europe" />
            <label htmlFor="europe">Europe</label>
            <input type="checkbox" name="oceania" id="oceania" />
            <label htmlFor="oceania">Oceania</label>
        </section>
    )
}
export { Regions }