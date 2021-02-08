import logo from './logo.svg';
import './App.css';

import CountFunction from './CounterFunct';
import CounterCla  from './CounterCla';

function App() {
  return (
    <div className="App">
      <CountFunction learn="Joshua"></CountFunction>
      <CounterCla></CounterCla>
    </div>
  );
}

export default App;
