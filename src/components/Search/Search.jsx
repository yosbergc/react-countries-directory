import SearchIcon from '../../assets/svg/Search.svg'
function Search () {
    return (
        <section className="search-container">
            <img src={SearchIcon} alt="Search Icon" />
            <input type="text" />
        </section>
    )
}
export { Search }