import { Routes, Route } from 'react-router-dom'
import { Navbar } from './Components/Navbar'
import About from './Pages/About'
import NotFound from './Pages/NotFound'
import SignIn from './Pages/SignIn'

function App() {
  return (
    <Navbar >
       <Routes>
         <Route path='/' element={<About />} />
         <Route path='/sign-in' element={<SignIn />} />
         <Route path='*' element={<NotFound />} />
       </Routes>
    </Navbar >
  )
}

export default App
