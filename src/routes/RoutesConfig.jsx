import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MovieSelect } from '../components/SessionSelect'

function RoutesConfig() {

    return (
        <Router>
            <Routes>
                <Route path='/' element={<MovieSelect />} />
            </Routes>
        </Router>
    )
}

export default RoutesConfig;