import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}