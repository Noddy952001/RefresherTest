import './App.css'
import {Addcity} from "./components/Addcity"
import {Routes ,Route} from "react-router-dom"
import {AddCountry} from "./components/Addcountry"
import {Home} from "./components/Home"
import { Updatecity } from './components/updatate'

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/city' element={<Addcity/>}></Route>
          <Route path='/country' element={<AddCountry/>}></Route>
          <Route path='/update:id' element={<Updatecity/>}></Route>
        </Routes>
    </div>
  )
}

export default App
