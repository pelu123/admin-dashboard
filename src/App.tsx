import Dashboard from "./components/Dashboard/Dashboard"
import SideBar from "./components/SideBar/SideBar"

function App() {


  return (
    <main className="grid gap-4 p-4 grid-cols-[250px_1fr]">
      <SideBar />
      <Dashboard />
    </main>
  )
}

export default App
