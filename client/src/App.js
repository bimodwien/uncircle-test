import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index'
import Home from './pages/home'
import AddBarang from './pages/addBarang'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Toko Online</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/tambahBarang">Add New</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Login</Button>
        </Form>
      </Navbar>
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
