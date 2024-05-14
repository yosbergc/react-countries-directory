import { useParams } from "react-router-dom"
function CountryPage() {
    const { country } = useParams()
    return (<section>
        <h2>HOLA {country}</h2>
    </section>)
}
export {CountryPage}