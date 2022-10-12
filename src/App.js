import './App.css';
import Card from './Card.jsx';
import Result from './Result.js'
import { useState } from 'react';

function App() {
  const [rate, setRate] = useState(null)
  const [rated, setRated] = useState(false)
  function submit() {
    if (rate !== null) {
      setRated(true)
    }
  }
  return (
    <div className="App">
      {!rated && <Card rate={setRate} submit={submit} card={setRate} />}
      {rated && <Result rate={rate} />}

    </div>
  );
}

export default App;
