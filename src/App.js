import './App.css';
import { MovieSelect } from './components/SessionSelect';

function App() {
  return (
    <div className='flex flex-col m-3'>
      <section>
        <MovieSelect />
      </section>
    </div>
  );
}

export default App;
