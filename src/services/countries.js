async function getCountries() {
    try {
        const res = await fetch('https://restcountries.com/v3.1/all')
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('We had an error')
    }
}
export { getCountries }