import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "../components/Home"
import ProductsList from "../components/ProductsList"
import NewProductView from "../components/NewProductView"
import NotFound from "../components/NotFound"

const Router = () => {
  return (
    <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<ProductsList/>}/>
                <Route path="/products/:id" element={<ProductsList/>}/>
                <Route path="/products/new" element={<NewProductView/>}/>
                <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}

export default Router