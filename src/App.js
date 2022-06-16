import logo from './logo.svg';
import './App.css';
//import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';


// const App = () => {
    //  return (
    //    <Router>
    //      <div>
    //        <nav>
    //        <Link to="/"id="nav-home"><p><strong>YouTube</strong></p></Link>
    //          <Link to="/" id="nav-home"><p>Home</p></Link>
    //          <Link to="/about" id="nav-about"><p>About Us</p></Link>
    //        </nav>
    //        <Switch>
    //          <Route exact path="/">
    //            <Home />
    //          </Route>
      
    //          <Route path="/about">
    //            <About />
    //          </Route>
    //          <Route path="/videos/:id" component={Videos}>
    //          </Route>
    //        </Switch>
    //      </div>
    //    </Router>
    //  );
    //   }








function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
