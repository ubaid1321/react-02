import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Header from "./components/Header"
import Displaycounter from "./components/Displaycounter"
import Modal from "./components/Modal"
import Controls from "./components/Controls"

function App() {
 

  return (
    <>
     <center className="px-4 py-5 my-5 text-center">
      <Modal>
    <Header/>
    <div className="col-lg-6 mx-auto">
     < Displaycounter/>
      <Controls/>
    </div>
    </Modal>
  </center>
    </>
  )
}

export default App
