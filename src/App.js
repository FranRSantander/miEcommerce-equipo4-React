import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return(
    <BrowserRouter>
          <SideBar/>
          <MainArea>
          
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<ProductsList/>}/>
                <Route path="/products/:id" element={<ProductsList/>}/>
                <Route path="/products/new" element={<NewProductView/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>

          </MainArea>
    </BrowserRouter>
);
}

export default App;
