import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import RouteList from './routes';
import NavList from './component/nav-bar/nav-list';

function App() {
  return (
    <div className="App">
      <Router>
        <RouteList />
        <NavList/>
      </Router>

    </div>
  );
}


export default App;

