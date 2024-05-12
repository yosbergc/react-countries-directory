import './sorted.css'
function Sorted ({ onChange }) {
    const handleChange = (event) => {
        onChange(event.target.value)
    }
    return (
        <section className='sorted'>
            <label htmlFor="sort">Sort By</label>
            <select name="sort" id="sort" onChange={handleChange}>
                <option value="population">Population</option>
                <option value="alphabetical">Alphabetical</option>
                <option value="area">Area</option>
            </select>
        </section>
    )
}
export { Sorted }