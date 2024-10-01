import {BrowserRouter,Routes,Route} from "react-router-dom";
import Reigster from "./Reigster.jsx";
import Login from "./Login.jsx";
import Home from "./Home.jsx";
function App() {
  
  return (
   
   <>
   <BrowserRouter>
    <Routes>
      <Route path="/register" element={<Reigster/>}>Register</Route>
      <Route path="/login" element={<Login/>}>Login</Route>
      <Route path="/home" element={<Home/>}>Home</Route>
    </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
