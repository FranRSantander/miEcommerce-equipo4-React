import { Routes, Route } from 'react-router-dom';


function Router (){
    return(

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<ProductsList/>}/>
            <Route path="/products/:id" element={<ProductView/>}/>
            <Route path="/products/new" element={<NewProductView/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
}

export default Router;