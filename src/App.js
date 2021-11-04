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
      <div className="app-container">
        <Router>
          <header className="header">
            <div className="nav-container">
              <h1 className="header-h1">BookStore CMS</h1>
              <nav className="navigation">
                <ul>
                  <li>
                    <Link className="link" to="/books">BOOKS</Link>
                  </li>
                  <li>
                    <Link className="link" to="/categories">CATEGORIES</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div>Logo</div>
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
      </div>
    </Provider>
  );
}

export default App;
