import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Courses from './components/Courses'

function App() {
  const [login, setLogin] = useState(false)

  return (
    <div className="App">
  

      <Router>
        <Routes>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/courses' element={<Courses/>}/>
        </Routes>
      </Router>
   
    </div>
  )
}

export default App
