import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { CountryPage } from './routes/CountryPage/CountryPage.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <Routes>
            <Route path='/' Component={App} />
            <Route path='/country/:country' Component={CountryPage} />
        </Routes>
    </Router>
)
