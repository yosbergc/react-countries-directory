import React from "react"
const initialFilter = {
    query: '',
    sortBy: 'population',
    region: {
        Americas: false,
        Antarctic: false,
        Africa: false,
        Asia: false,
        Europe: false,
        Oceania: false
    },
    isMember: false,
    isIndependent: false
}
function useFilters () {
    const [filters, setFilters] = React.useState(initialFilter)

    function filterCountries(countries) {
        const order = orderCountries(countries)
        const filtered = order.filter(country => {
            const query = filters.query === '' || country.name.common.startsWith(filters.query);
            const region = filters.region;
            
            const isMember = filters.isMember === false || country.unMember === true;
            const isIndependent = filters.isIndependent === false || country.independent === true;

            return query && region && isMember && isIndependent;
        })
        return filtered;
    }

    function changeOrder(newOrder) {
        const currentFilter = {...filters}
        currentFilter.sortBy = newOrder;
        setFilters(currentFilter)
    }
    function orderCountries(countries) {
        const sortBy = filters.sortBy;
        if (sortBy === 'population'){
            return countries.sort((a, b) => {
                return b.population - a.population
            })
        }
        if (sortBy === 'alphabetical'){
            return countries.sort((a, b) => {
                return a.name.common.localeCompare(b.name.common)
            })
        }
        if (sortBy === 'area'){
            return countries.sort((a, b) => {
                return b.area - a.area
            })
        }
    }
    function searchCountry(query) {
        const prevFilters = {...filters}
        prevFilters.query = query;
        setFilters(prevFilters)
    }
    return {filters, filterCountries, changeOrder, searchCountry}
}
export { useFilters }