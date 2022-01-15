import { Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout'
import About from './Pages/About'
import NotFound from './Pages/NotFound'
import SignIn from './Pages/SignIn'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App
