import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header, SearchForm } from "./components"
import {
  Homepage,
  Error,
  Capsules,
  SingleCapsule,
  Rockets,
  SingleRocket,
} from "./pages"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/capsules" element={<Capsules/>}></Route>
        <Route path="/capsules/:id" element={<SingleCapsule />}></Route>
        <Route path="/rockets" element={<Rockets />}></Route>
        <Route path="/rockets/:id" element={<SingleRocket />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
