import './App.css';
import { Cinema } from './components/Cinema';
import { MovieSelect } from './components/MovieSelect';

function App() {
  
  // const[clicks, setClicks] = useState(0)

  // const restartSeats = () => {
  //   setClicks(0);
  // }


  return (
    <div className='flex flex-col m-3'>
      <section>
        <MovieSelect/>
      </section>
      <section>
        <Cinema/>
      </section>
    </div>
  );
}

export default App;
