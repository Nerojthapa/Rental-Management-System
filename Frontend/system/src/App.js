import React from 'react';
import { Container } from 'react-bootstrap';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {HashRouter as Router,Routes,Route} from 'react-router-dom';
import HomeScreen from './components/screens/HomeScreen';
import SignupScreen from './components/screens/SignupScreen';
import LoginSCreen from './components/screens/LoginSCreen';
import ProfileScreen from './components/screens/ProfileScreen';
import CartScreen from './components/screens/CartScreen';
import LogoutScreen from './components/screens/LogoutScreen';


export default function App() {
  return (
    <>
     <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<HomeScreen/>}></Route>
      </Routes>
      <Routes>
        <Route exact path="/signup" element={<SignupScreen/>}></Route>
      </Routes>
      <Routes>
        <Route exact path="/login" element={<LoginSCreen/>}></Route>
      </Routes>
      <Routes>
        <Route exact path="/profile" element={<ProfileScreen/>}></Route>
      </Routes>
      <Routes>
        <Route exact path="/cart" element={<CartScreen/>}></Route>
      </Routes>
      <Routes>
        <Route exact path="/logout" element={<LogoutScreen/>}></Route>
      </Routes>
     </Router>
    </>
  );
}