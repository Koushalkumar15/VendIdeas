import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, } from "react-router-dom";
//import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/Cart/Cart";
import Modal from "./components/Modal";
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Navbar /> */}
       
        <Switch>
          <Route exact path="/" component={SignInForm} />
          <Route path="/sign-up" component={SignUpForm} />
          <Route path="/home" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
