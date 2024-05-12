import React from "react";
import { useFilters } from "./useFilters";
import countriesList from '../mockups/response.json'

function useCountries() {
    const [countries] = React.useState(countriesList)
    const {filters, filterCountries, changeOrder, searchCountry, isUnitedNationsMember, isIndependent, changeRegion} = useFilters()
    const filteredCountries = filterCountries(countries);
    const filteredLength = filteredCountries.length;
    return { filters, filteredCountries, changeOrder, filteredLength, searchCountry, isUnitedNationsMember, isIndependent, changeRegion }
}
export { useCountries }