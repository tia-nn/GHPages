import './App.css'
import Link from "./components/Link"
import { BreakpointDebugBorder } from "./debug"
import BusinessCard from "./sections/BusinessCard"
import showcaseURL from '/cpu-showcase/index.html?url'
import pdfWriterURL from '/pdf-writer/index.html?url'

function App() {
  return (
    <div className="min-h-screen bg-bgcolor">
      <BusinessCard />
      <div className={"max-w-screen-sm lg:max-w-screen-md 2xl:max-w-screen-lg px-6 md:px-0 mx-auto" + BreakpointDebugBorder}>
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
