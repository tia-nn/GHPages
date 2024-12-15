import './App.css'
import BusinessCard from "./sections/BusinessCard"
import Footer from "./sections/Footer"
import Portfolio from "./sections/Portfolio"
import Skills from "./sections/Skills"
import Timeline from "./sections/Timeline"

function App() {
  return (
    <div className="min-h-screen bg-pattern">
      <BusinessCard />
      <div className="
        bg-white rounded-xl mb-12
        max-w-screen-sm lg:max-w-screen-md 2xl:max-w-screen-lg
        mx-auto px-6 py-12 space-y-12 md:px-0
        sm:relative sm:shadow-2xl
      ">
        <Timeline />
        <Skills />
        <Portfolio />
      </div>
      <Footer />
    </div>
  )
}

export default App
