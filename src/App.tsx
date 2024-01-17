import "./index.css"
import "./components/InfoText"
import InfoText from "./components/InfoText"
import FreeTrailForm from "./components/FreeTrailForm"
import BlueButton from "./components/BlueButton"

function App() {
  

  return (
    <>
      <div className="container">
          <BlueButton />
          <InfoText />
          <FreeTrailForm />
      </div>
    </>
  )
}

export default App
