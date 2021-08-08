import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import CartItem from "./components/CartItem";
function App() {
  return (
    <Router>
      <Header />
      <Container>
        <main>
          <Route path='/' component={Home} />
          <Route path='/item' component={CartItem} />
        </main>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;

