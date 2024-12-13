import './App.css'
import Link from "./components/Link"
import BusinessCard from "./sections/BusinessCard"
import Skills from "./sections/Skills"
import Timeline from "./sections/Timeline"
import showcaseURL from '/cpu-showcase/index.html?url'
import pdfWriterURL from '/pdf-writer/index.html?url'

function App() {
  return (
    <div className="min-h-screen bg-pattern pb-4">
      <BusinessCard />
      <div className="max-w-screen-sm lg:max-w-screen-md 2xl:max-w-screen-lg px-6 md:px-0 mx-auto bg-white rounded-md shadow-2xl p-12 space-y-12">
        <Timeline />
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
