import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import ProductsList from '../pages/Products/ProductsList/ProductsList';

function Router (){
    return(

        <Routes>
            <Route path="/" element={<Home/>}/>
        
            <Route path="/products" element={<ProductsList/>}/>

          {/*   <Route path="/products/:id" element={<ProductView/>}/>
            <Route path="/products/new" element={<NewProductView/>}/>
            <Route path="*" element={<NotFound/>}/> */}
        </Routes>
    );
}

export default Router
