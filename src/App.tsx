import './App.css'
import showcaseURL from '/cpu-showcase/index.html?url'
import pdfWriterURL from '/pdf-writer/index.html?url'

function App() {
  return (
    <>
      <p>
        <a href={showcaseURL}>cpu-showcase</a>
      </p>
      <p>
        <a href={pdfWriterURL}>pdf-writer</a>
      </p>
    </>
  )
}

export default App
