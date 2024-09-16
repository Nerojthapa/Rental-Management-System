import React from "react";
  import { Container } from "react-bootstrap";
  import Footer from "./components/Footer";
  import Header from "./components/Header";
  import { HashRouter as Router, Routes, Route } from "react-router-dom";
  import HomeScreen from "./components/screens/HomeScreen";
  import SignupScreen from "./components/screens/SignupScreen";
  import LoginScreen from "./components/screens/LoginScreen";
  import CartScreen from "./components/screens/CartScreen";
  import ProductScreen from "./components/screens/ProductScreen";
  import PaymentScreen from "./components/screens/payment";
  import CashOnDeliveryConfirmationScreen from "./components/screens/CashOnDeliveryConfirmationScreen";
  import EsewaVerificationScreen from "./components/screens/EsewaVerificationScreen";
  import SuccessScreen from "./components/screens/SuccessScreen";
  import OwnerScreen from "./components/screens/OwnerScreen";

  export default function App() {
    return (
      <>
        <Router>
          <Header />
          <main className="py-3">
            <Container>
              <Routes>
                <Route exact path="/" element={<HomeScreen />} />
                <Route exact path="/product/:id" element={<ProductScreen />} />
                <Route exact path="/login" element={<LoginScreen />} />
                <Route exact path="/signup" element={<SignupScreen />} />
                <Route exact path="/cart/:id?" element={<CartScreen />} />
                <Route path="/payment" element={<PaymentScreen />} />
                <Route path="/esewaVerify" element={<EsewaVerificationScreen />} />
                <Route path="/orderSuccess" element={<SuccessScreen />} />
                <Route path="/codConfirm" element={<CashOnDeliveryConfirmationScreen />} />
                <Route exact path="/ownersc" element={<OwnerScreen />}></Route>
              </Routes>
            </Container>
          </main>
          <Footer />
        </Router>
      </>
    );
  }