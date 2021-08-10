import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import CartItem from "./components/CartItem";
import LoginScreen from "./components/LoginScreen";
import RegisterScreen from "./components/RegisterScreen";
import ProductListScreen from "./components/ProductListScreen";
import UserListScreen from "./components/UserListScreen";
import CartScreen from "./components/CartScreen";
import AddProduct from "./components/AddProduct";
function App() {
  return (
    <Router>
      <Header />
      <Container>
        <main>
          <Route exact path='/' component={Home} />
          <Route path='/item' component={CartItem} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/list' component={ProductListScreen} />
          <Route path='/userList' component={UserListScreen} />
          <Route path='/add' component={AddProduct} />
          <Route path='/cart' component={CartScreen} />
        </main>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;

