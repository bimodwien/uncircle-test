import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index'
import Home from './pages/home'
import AddBarang from './pages/addBarang'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/tambahBarang">
            <AddBarang />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App;
