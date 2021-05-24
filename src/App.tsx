import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { TopNavbar } from './components/TopNavbar'

function App() {
    return (
      <Router>
        <TopNavbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
