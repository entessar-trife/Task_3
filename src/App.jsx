import './App.css'
import NavBarComponent from './components/NavBarComponent/NavBarComponent'
import FooterComponent from './components/FooterComponent/FooterComponent'
import BannerComponent from './components/BannerComponent/BannerComponent'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Academics from './Pages/Academics'
import About from './Pages/About'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      offset: 0,
      once: false,
      mirror: true
    });
  }, []);

  return (
    <>
      <ScrollToTop />
      <BannerComponent />
      <NavBarComponent logo="/Task_3/images/Logo.png" />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/academics' element={<Academics />} />
      </Routes>
      <FooterComponent
        logo="/Task_3/images/Logo.png"
        txt="We believe in the power of play to foster creativity,
              problem-solving skills, and imagination." />
    </>
  )
}

export default App
