import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar'
import Hiro from './components/landingPG/Hiro'
import About from './components/about/About'
import NotFound from './components/notFound/NotFound';
import BuyNow from './components/howtobuy/BuyNow';
import Footer from './components/footer/footer';
function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
                <Route  path='*' element={< NotFound />}></Route>
                <Route  path='/' element={< Hiro />}></Route>
                <Route  path='/home' element={< Hiro />}></Route>
                <Route  path='/about' element={< About />}></Route>
                <Route  path='/buynow' element={< BuyNow />}></Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
