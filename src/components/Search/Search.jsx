import SearchIcon from '../../assets/svg/Search.svg'
import './Search.css'
import debounce from '../../tools/debounce'
function Search ({ onChange }) {
    const debounceChange = debounce((event) => {
        onChange(event.target.value)
    }, 200)
    const handleChange = (event) => {
        debounceChange(event)
    }
    return (
        <section className="search-container">
            <img src={SearchIcon} alt="Search Icon" />
            <input type="text" placeholder='Search by Name, Region, Subregion' onChange={handleChange}/>
        </section>
    )
}
export { Search }