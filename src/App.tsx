import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { Home } from './components/Home';
import { TopNavbar } from './components/TopNavbar'

function App() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <TopNavbar />
        <Switch>
          <Route path="/">
            <Home />
          </Route>

          <Route> 
            <Redirect to="/"></Redirect>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
