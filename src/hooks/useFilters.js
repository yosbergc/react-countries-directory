import React from "react"
const initialFilter = {
    query: '',
    sortBy: 'Population',
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
    function orderCountries(countries) {
        const sortBy = filters.sortBy;
        if (sortBy === 'Population'){
            return countries.sort((a, b) => {
                return b.population - a.population
            })
        }
    }
    return {filters, filterCountries, orderCountries}
}
export { useFilters }