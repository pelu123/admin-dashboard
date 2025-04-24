import { Routes, Route } from "react-router-dom"
import Dashboard from "./components/Dashboard/Dashboard"
import SideBar from "./components/SideBar/SideBar"
import Login from "./components/pages/Login"
import Register from "./components/pages/Register"

function App() {


  return (
    <main className="grid gap-4 p-4 grid-cols-[250px_1fr]">
      <SideBar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />}/>
      </Routes>     
    </main>
  )
}

export default App
