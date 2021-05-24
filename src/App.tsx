import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
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
          {/* fallback */}
          <Route> 
            <Home/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
