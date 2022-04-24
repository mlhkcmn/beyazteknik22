import React, { Suspense, useState } from 'react'
import { BrowserRouter as HashRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';
import './styles/App.css'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Pages
const Home = React.lazy(() => import('./pages/home'))
const About = React.lazy(() => import('./pages/about'))
const Market = React.lazy(() => import('./pages/market'))
const Contact = React.lazy(() => import('./pages/contact'))
const Login = React.lazy(() => import('./pages/Login'))
const Register = React.lazy(() => import('./pages/Register'))

function App() {
  const [user, setUser] = useState(null);
  return (
    <HashRouter>
      <Suspense fallback={loading}>
        <Navbar user={user} setUser={setUser}/>
        <Routes>
          <Route exact path="/market" name="Market Page" element={<Market />} />
          <Route exact path="/about" name="About Page" element={<About />} />
          <Route exact path="/signin" name="Login Page" element={<Login setUser={setUser}/>} />
          <Route exact path="/signup" name="Register Page" element={<Register />} />
          <Route exact path="*" name="Home Page" element={<Home />} />
          <Route exact path="/contact" name="Contact Page" element={<Contact />} />
        </Routes>
        <Footer/>
      </Suspense>
    </HashRouter>
  )
}

export default App