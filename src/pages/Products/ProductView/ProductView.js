import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FormProduct from '../../../components/FormProduct/FormProduct'
import { editProduct, getProduct } from '../../../utils/api'

const ProductView = () => {

    const [ product,setProduct] = useState({});

    const handleSubmit = (data) => {
        editProduct(data, data.id)
        .then(response => response.json())
        .then(data => console.log(data))
    }
    
    const { id } = useParams();

    useEffect(()=>{
      getProduct(id)
      .then(response => response.json())
      .then(data=> setProduct(data))
    },[])
    
    return (
        <>
          <FormProduct 
          handleSubmit={handleSubmit}
          product={product}
          />
        </>
    )
}

export default ProductView