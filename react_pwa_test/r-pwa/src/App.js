import Login from "./login.js"
import Home from "./home.js"
import SignUp from "./signup.js"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './index.css'



function App(){
  return (
  <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
  </Router>
  )
}

export default App
