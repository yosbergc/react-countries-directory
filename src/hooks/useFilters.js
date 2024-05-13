import React from "react"
const initialFilter = {
    query: '',
    sortBy: 'population',
    region: {
        americas: false,
        antarctic: false,
        africa: false,
        asia: false,
        europe: false,
        oceania: false
    },
    isMember: false,
    isIndependent: false
}
function useFilters () {
    const [filters, setFilters] = React.useState(initialFilter)

    function filterCountries(countries) {
        const order = orderCountries(countries)
        const regions = Object.entries(filters.region);
        const everyRegions = regions.every(region => region[1] === false)
        let regionsValidation;
            if (everyRegions) {
                regionsValidation = true;
            } else {
                regionsValidation = false;
            }
        const activeRegions = regions.filter(region => region[1] === true);
        const filtered = order.filter(country => {
            const query = filters.query === '' || country.name.common.toLowerCase().startsWith(filters.query.toLowerCase());
            const isMember = filters.isMember === false || country.unMember === true;
            const isIndependent = filters.isIndependent === false || country.independent === true;
            let regionFinal = true;
            if (!regionsValidation) {
                regionFinal = activeRegions.some(region => region[0].toLowerCase() === country.region.toLowerCase())
            }
            return query && regionFinal && isMember && isIndependent;
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
    function isUnitedNationsMember(newValue) {
        const newFilters = {...filters};
        newFilters.isMember = newValue;
        setFilters(newFilters)
    }
    function isIndependent(newValue) {
        const newFilters = {...filters}
        newFilters.isIndependent = newValue
        setFilters(newFilters)
    }
    function changeRegion(key, newValue) {
        const newFilters = {...filters}
        newFilters.region[key] = newValue;
        setFilters(newFilters)
    }
    return {filters, filterCountries, changeOrder, searchCountry, isUnitedNationsMember, isIndependent, changeRegion}
}
export { useFilters }