import React from "react";
import { useFilters } from "./useFilters";
import countriesList from '../mockups/response.json'

function useCountries() {
    const [countries] = React.useState(countriesList)
    const {filters, filterCountries, changeOrder} = useFilters()
    const filteredCountries = filterCountries(countries);
    const filteredLength = filteredCountries.length;
    return { filters, filteredCountries, changeOrder, filteredLength }
}
export { useCountries }