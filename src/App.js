

import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Ingredients from './components/Ingredients.jsx'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/ingredients">
                <Ingredients />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
