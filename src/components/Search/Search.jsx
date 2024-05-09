import SearchIcon from '../../assets/svg/Search.svg'
import './Search.css'
function Search () {
    return (
        <section className="search-container">
            <img src={SearchIcon} alt="Search Icon" />
            <input type="text" placeholder='Search by Name, Region, Subregion'/>
        </section>
    )
}
export { Search }