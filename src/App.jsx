import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Destination from "./Pages/Destination"
import Crew from "./Pages/Crew"
import Technology from "./Pages/Technology"

function App() {
  return (
    <>
      <Routes>
        <Route path="/Space-tourism-multi-page-website-with-React/" element={<Home />} />
        <Route path="/Space-tourism-multi-page-website-with-React/Destination" element={<Destination />} />
        <Route path="/Space-tourism-multi-page-website-with-React/Crew" element={<Crew />} />
        <Route path="/Space-tourism-multi-page-website-with-React/Technology" element={<Technology />} />
        <Route path="/Space-tourism-multi-page-website-with-React/*" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
