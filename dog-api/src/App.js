import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Random from './components/Random.js';
import AllDogs from './components/AllDogs.js';
import About from './components/About.js';

function App() {
  return (
    <div className="app">
      <Router>
        <div className="nav">
          <Link to="/random" className="navlink">RANDOM DOG</Link>
          <Link to="/all" className="navlink">ALL DOGS</Link>
          <Link to="/" className="navlink">ABOUT</Link>
        </div>
        <Route exact path="/random" component={Random} />
        <Route exact path="/all" component={AllDogs} />
        <Route exact path="/" component={About} />
      </Router>
    </div>
  );
}

export default App;
