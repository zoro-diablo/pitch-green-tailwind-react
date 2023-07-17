import Home from './Components/Home'
import About from './Components/About'
import Product from './Components/Product'
import { Route,Routes } from 'react-router-dom'
import Contact from './Container/Contact'
import Review from './Container/Review'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/review' element={<Review />} />
      </Routes>
    </>
  )
}

export default App
