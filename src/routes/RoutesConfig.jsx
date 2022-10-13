import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MovieSelect } from '../views/MovieSelect'
import { Home } from '../views/Home';

function RoutesConfig() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/session' element={<MovieSelect />} />
      </Routes>
    </Router>
)
}

export default RoutesConfig;