import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Random from './components/Random.js';
import AllDogs from './components/AllDogs.js';
import About from './components/About.js';

function App() {
  return (
    <div class="app">
      <Router>
        <div class="nav">
          <Link to="/random" class="navlink">RANDOM DOG</Link>
          <Link to="/all" class="navlink">ALL DOGS</Link>
          <Link to="/" class="navlink">ABOUT</Link>
        </div>
        <Route exact path="/random" component={Random} />
        <Route exact path="/all" component={AllDogs} />
        <Route exact path="/" component={About} />
      </Router>
    </div>
  );
}

export default App;
