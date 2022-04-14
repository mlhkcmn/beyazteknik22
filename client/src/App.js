import React, { Component, Suspense } from 'react'
import {BrowserRouter as HashRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import './styles/App.css'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Pages
const Home = React.lazy(() => import('./pages/home'))
const About = React.lazy(() => import('./pages/about'))
// const Market = React.lazy(() => import('./pages/marketplace'))
const Contact = React.lazy(() => import('./pages/contact'))
const Login = React.lazy(() => import('./pages/login'))
const Register = React.lazy(() => import('./pages/register'))

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={loading}>
        <Navbar/>
          <Routes>
            {/* <Route exact path="/market" name="Market Page" element={<Market />} /> */}
            <Route exact path="/about" name="About Page" element={<About />} />
            <Route exact path="/login" name="Login Page" element={<Login />} />
            <Route exact path="/register" name="Register Page" element={<Register />} />
            <Route exact path="*" name="Home Page" element={<Home />} />
            <Route exact path="/contact" name="Contact Page" element={<Contact />} />
          </Routes>
          <Footer />
        </Suspense>
      </HashRouter>
    )
  }
}

export default App