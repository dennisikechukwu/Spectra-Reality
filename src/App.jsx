import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Feature from "./components/Feature"
import Workflow from "./components/Workflow"
import Pricing from "./components/Pricing"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero/>
        <Feature/>
        <Workflow/>
        <Pricing/>
        <Testimonials/>
        <Footer/>

      </div>
    </div>
  )
}