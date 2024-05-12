import React from "react";
import { useFilters } from "./useFilters";
import countriesList from '../mockups/response.json'

function useCountries() {
    const [countries] = React.useState(countriesList)
    const {filters, filterCountries} = useFilters()
    let filteredCountries = filterCountries(countries);
    return { filters, filteredCountries }
}
export { useCountries }