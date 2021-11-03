import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navigation/Navbar';
import BooksContainer from './components/Pages/BooksContainer';
import Categories from './components/Pages/Categories';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <div className="main-container">
          <Switch>
            <Route exact path="/">
              <BooksContainer />
            </Route>
            <Route exact path="/Categories">
              <Categories />
            </Route>
          </Switch>
        </div>
      </main>
    </Router>
  );
}

export default App;
