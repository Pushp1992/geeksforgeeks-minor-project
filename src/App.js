import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import RouteList from './routes';

function App() {
  return (
    <div className="App">
      <Router>
        <RouteList />
      </Router>
    </div>
  );
}


export default App;

