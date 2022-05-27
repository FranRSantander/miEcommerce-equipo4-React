import { Routes, Route } from 'react-router-dom';

import Home from '../components/Home';

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        
        {/* <Route path="/products" element={<ProductsList/>}/>
        <Route path="/products/:id" element={<ProductsView/>}/>
        <Route path="/products/new" element={<NewProductView/>}/>
        <Route path="*" element={<NotFound/>}/> */}
    </Routes>
  )
}

export default Router