import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Navigation } from "components/Navigation"
import { Home, Products, Cart, Contacts } from "routes"

export const App = () => (
  <Router>
    <Switch>
      <Navigation>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/contacts" component={Contacts} />
      </Navigation>
    </Switch>
  </Router>
)
