
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Appointment from './Component/Appointment/Appointment'
import Services from './Component/Services/Services'
import Testimonial from './Component/Testtimonial/Testimonial'
import About from './Component/About/About'
import Price from './Component/Price/Price'
import Team from './Component/Team/Team'
import Cta from './Component/Cta/Cta'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Appointment/>
      <About/>
      <Services/>
      <Testimonial/>
      <Price/>
      <Cta/> 
      <Team/>
      <Contact/>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
