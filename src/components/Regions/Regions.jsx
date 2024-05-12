import './regions.css'
function Regions ({ onChange }) {
    const handleCheck = (event) => {
        onChange(event.target.name, event.target.checked)
    }
    return (
        <section className="region-filter">
            <h3>Region</h3>
            <input type="checkbox" name="americas" id="americas" onChange={handleCheck}/>
            <label htmlFor="americas">Americas</label>
            <input type="checkbox" name="antarctic" id="antarctic" onChange={handleCheck}/>
            <label htmlFor="antarctic">Antarctic</label>
            <input type="checkbox" name="africa" id="africa" onChange={handleCheck}/>
            <label htmlFor="africa">Africa</label>
            <input type="checkbox" name="asia" id="asia" onChange={handleCheck}/>
            <label htmlFor="asia">Asia</label>
            <input type="checkbox" name="europe" id="europe" onChange={handleCheck}/>
            <label htmlFor="europe">Europe</label>
            <input type="checkbox" name="oceania" id="oceania" onChange={handleCheck}/>
            <label htmlFor="oceania">Oceania</label>
        </section>
    )
}
export { Regions }