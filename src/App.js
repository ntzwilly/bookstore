import './App.css';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Books from './components/Books';
import Categories from './components/Categories';
import store from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <header>
          <h1>BookStore CMS</h1>
          <nav>
            <ul>
              <li>
                <Link to="/books">BOOKS</Link>
              </li>
              <li>
                <Link to="/categories">CATEGORIES</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route path="/categories">
            <Categories />
          </Route>
          <Route path="/">
            <Books />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
