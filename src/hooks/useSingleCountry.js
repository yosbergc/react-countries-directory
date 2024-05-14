/* eslint-disable react-hooks/exhaustive-deps */
import { getSingleCountry } from '../services/getSingleCountry'
import React from 'react'
function useSingleCountry(country) {
    const [singleCountry, setSingleCountry] = React.useState([]);
    const singleCountrySelected = singleCountry[0]
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        getSingleCountry(country)
        .then(data => {
            setSingleCountry(data)
            setLoading(false)
        }).catch(error => {
            console.error(error)
            setError(true)
            setLoading(false)
        })
    }, [])
    return {singleCountrySelected, loading, error}
}
export { useSingleCountry }