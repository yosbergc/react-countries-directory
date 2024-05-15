async function getListOfCountries(list) {
    if (!list) return
    try {
        const request = await fetch(`https://restcountries.com/v3.1/alpha?codes=${list.join(',')}`)
        const json = await request.json();
        return json;
    } catch (error) {
        console.error(error)
    }
}
export { getListOfCountries }