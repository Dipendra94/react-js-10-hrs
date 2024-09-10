import './App.css'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import About from './pages/about/About'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import SingleProduct from './pages/single/SingleProduct'
import EditProduct from './pages/edit/EditProduct'



function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login'  element={<Login/>}/>
          <Route path='/home'  element={<Home/>}/>
          <Route path='/create'  element={<Create/>}/>
          <Route path='/about'  element={<About/>}/>
          <Route path='/product/:id' element={<SingleProduct/>}/>
          <Route path='/edit' element={<EditProduct/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
