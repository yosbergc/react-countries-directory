async function getSingleCountry(country) {
    try {
        const request = await fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`);
        const json = await request.json();
        return json;
    } catch (error) {
        console.error(error)
    }
}
export { getSingleCountry }