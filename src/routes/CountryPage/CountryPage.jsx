import './CountryPage.css'
import { useParams } from "react-router-dom"
import { Header } from "../../components/Header/Header"

function CountryPage() {
    const { country } = useParams()
    return (<>
        <Header/>
        <main>
            <h2>{country}</h2>
        </main>
    </>)
}
export {CountryPage}