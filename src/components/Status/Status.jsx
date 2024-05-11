import './Status.css'
function Status () {
    return (
        <section className='status-container'>
            <h2>Status</h2>
            <section className='statusSingle'>
                <input type="checkbox" name="member" id="member" />
                <div className='check' />
                <label htmlFor="member">Member of the United Nations</label>
            </section>
            <section className='statusSingle'>
                <input type="checkbox" name="independent" id="independent" />
                <div className='check' />
                <label htmlFor="independent">Independent</label>
            </section>
        </section>
    )
}
export { Status }