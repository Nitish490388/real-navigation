import { 
  Routes,
  Route
 } from "react-router-dom";
import Home from "./pages/Home";
import MapPage from "./pages/map";

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/map" element={<MapPage/>}></Route>
      </Routes>
    </>
  )
}

export default App
