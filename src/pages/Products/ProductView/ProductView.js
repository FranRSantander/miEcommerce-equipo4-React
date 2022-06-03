import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import FormProduct from '../../../components/FormProduct/FormProduct'
import { editProduct, getProduct, deleteProduct } from '../../../utils/api'

const ProductView = () => {

    const [ product,setProduct] = useState({});
    
    const handleSubmit = (data) => {
      editProduct(data, data.id)
      .then(response => response.json())
    }
    
    const { id } = useParams();

    useEffect(()=>{
      getProduct(id)
      .then(response => response.json())
      .then(data=> setProduct(data))
    },[])
    
    //Guarda la funcion Navigate y la ejecuta junto al Hook con metodo DELETE
    const navigate = useNavigate()

    const handleDelete = () => {
      deleteProduct(id)
      navigate('/products')
    }

    return (
        <>
  
          <button onClick={handleDelete}>ELIMINAR</button>
          <FormProduct 
          handleSubmit={handleSubmit}
          product={product}
          />
        </>
    )
}

export default ProductView