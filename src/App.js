import './App.css';
import { Cinema } from './components/Cinema';
import { MovieSelect } from './components/MovieSelect';
import { Counter } from './components/Counter';

function App() {
  return (
    <div className='flex flex-col m-3'>
      <section>
        <MovieSelect/>
      </section>
      <section>
        <Cinema/>
      </section>
      <section>
        <Counter/>
      </section>
      
      
      
    </div>
  );
}

export default App;
