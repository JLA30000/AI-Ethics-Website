import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Impact from './pages/Impact.jsx'
import Students from './pages/Students.jsx'
import Teachers from './pages/Teachers.jsx'
import Parents from './pages/Parents.jsx'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/students" element={<Students />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/parents" element={<Parents />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
