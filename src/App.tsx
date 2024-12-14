import './App.css'
import Link from "./components/Link"
import BusinessCard from "./sections/BusinessCard"
import SkillGraph from "./sections/SkillGraph"
import Skills from "./sections/Skills"
import Timeline from "./sections/Timeline"
import showcaseURL from '/cpu-showcase/index.html?url'
import pdfWriterURL from '/pdf-writer/index.html?url'

function App() {
  return (
    <div className="min-h-screen bg-pattern pb-4">
      <BusinessCard />
      <div className="
        bg-white rounded-xl
        max-w-screen-sm lg:max-w-screen-md 2xl:max-w-screen-lg
        mx-auto px-6 py-12 space-y-12 md:px-0
        sm:relative sm:shadow-2xl
      ">
        <Timeline />
        <SkillGraph />
        <Skills />

        <h1 className="text-lg">Tools</h1>
        <p>
          <Link href={showcaseURL}>cpu-showcase</Link>
        </p>
        <p>
          <Link href={pdfWriterURL}>pdf-writer</Link>
        </p>
      </div>
    </div>
  )
}

export default App
