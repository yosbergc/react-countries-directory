import { AiOutlineLoading3Quarters } from "react-icons/ai";
import './loading.css'
function Loading () {
    return (
        <section className="loadingContainer">
            <AiOutlineLoading3Quarters color="white" className="loading" size={30}/>
        </section>
    )
}
export { Loading }