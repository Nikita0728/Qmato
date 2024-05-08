import './App.css'
import { Navbars } from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { Cart } from './pages/Cart/Cart';
import { Home } from './pages/Home/Home';
import {Placeorder} from './pages/Placeorder/Placeorder'
import { ExploreMenu } from './components/ExploreMenu/ExploreMenu';

function App() {

  return (
    <>
     <Navbars/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element ={<Cart/>}/>
      <Route path='/order' element ={<Placeorder/>}/>
      <Route path='/menu'  element={<ExploreMenu/>}/>




     </Routes>
    </>
  )
}

export default App
