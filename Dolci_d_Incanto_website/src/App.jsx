import Navbar from "./components/navbar/Navbar"
import Carousel from "./components/carousel/Carousel"
import Footer from "./components/footer/Footer"
import Layout from "./components/layout/Layout"
import AboutUs from "./pages/AboutUs"
import Home from "./pages/Home"
import IceCreamShop from "./pages/IceCreamShop"
import PastryEvents from "./pages/PastryEvents"
import PastrySection from "./pages/PastrySection"
import PastryShop from "./pages/PastryShop"
import Preventive from "./pages/Preventive"
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Layout />
      <Footer />
    </>
  )
}

export default App
