import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import MainArea from './components/MainArea';
import Home from './components/Home';
import ProductsList from './components/ProductsList';
import Product from './components/Product';
import NewProduct from './components/NewProduct';
import NotFound from './components/NotFound';


function App() {
  return(
    <BrowserRouter>
          <SideBar/>
          <MainArea>
          
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<ProductsList/>}/>
                <Route path="/products/:id" element={<Product/>}/>
                <Route path="/products/new" element={<NewProduct/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>

          </MainArea>
    </BrowserRouter>
);
}

export default App;
