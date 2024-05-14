import React from "react";
import { useFilters } from "./useFilters";
import { getCountries } from "../services/countries";
function useCountries() {
    const [countries, setCountries] = React.useState([])
    const [isLoading, setLoading] = React.useState(true)
    React.useEffect(() => {
        getCountries()
        .then((data) => {
            setCountries(data)
            setLoading(false)
        }).catch(error => console.error(error))
    }, [])
    const {filters, filterCountries, changeOrder, searchCountry, isUnitedNationsMember, isIndependent, changeRegion} = useFilters()
    const filteredCountries = filterCountries(countries);
    const filteredLength = filteredCountries.length;
    return { filters, filteredCountries, changeOrder, filteredLength, searchCountry, isUnitedNationsMember, isIndependent, changeRegion, isLoading }
}
export { useCountries }