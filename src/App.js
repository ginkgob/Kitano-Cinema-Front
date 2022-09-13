import './App.css';
import { Cinema } from './components/Cinema';
import { MovieSelect } from './components/MovieSelect';
import { Counter } from './components/Counter';
// import { useState } from 'react';  

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
        <Cinema
          // clickEvent={addSeat}
        />
      </section>
      <section>
        <Counter 
          // text='Add'
          // clickButton={true}
          // clickEvent={addSeat}
          // times = {clicks}
          />
        <Counter
          // text='Restart'
          // clickButton={false}
          // clickEvent={restartSeats}
        />
      </section>
      
      
      
    </div>
  );
}

export default App;
