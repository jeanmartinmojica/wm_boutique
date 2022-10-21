import './App.css';
import {NavBar} from "./components/NavBar/NavBar"
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer"
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { CartProvider } from './context/CartContext';
import {CartContainer} from './components/CartContainer/CartContainer'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/home' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/promotions' element={<ItemListContainer/>}/>
            <Route path='/giftcards' element={<ItemListContainer/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<CartContainer/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
