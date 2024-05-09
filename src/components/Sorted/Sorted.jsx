import './sorted.css'
function Sorted () {
    return (
        <section className='sorted'>
            <label htmlFor="sort">Sort By</label>
            <select name="sort" id="sort">
                <option value="population">Population</option>
                <option value="alphabetical">Alphabetical</option>
                <option value="area">Area</option>
            </select>
        </section>
    )
}
export { Sorted }