import './Status.css'
function Status ({ onUNChange, onIndependentChange }) {
    const handleUN = (event) => {
        onUNChange(event.target.checked)
    }
    const handleIndependent = (event) => {
        onIndependentChange(event.target.checked)
    }
    return (
        <section className='status-container'>
            <h2>Status</h2>
            <section className='statusSingle'>
                <input type="checkbox" name="member" id="member" onChange={handleUN}></input>
                <div className='check' />
                <label htmlFor="member">Member of the United Nations</label>
            </section>
            <section className='statusSingle'>
                <input type="checkbox" name="independent" id="independent" onChange={handleIndependent}/>
                <div className='check' />
                <label htmlFor="independent">Independent</label>
            </section>
        </section>
    )
}
export { Status }