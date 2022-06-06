import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { editProduct, getProduct, deleteProduct } from '../../../utils/api'

import Header from '../../../components/Header/Header'
import FormProduct from '../../../components/FormProduct/FormProduct'

import '../../../components/Header/BeforeHeader.css'

const ProductView = () => {

    const [ product,setProduct] = useState({});
    
    const handleSubmit = (data) => {
      editProduct(data, data.id)
    }
    
    const { id } = useParams();

    useEffect(()=>{
      getProduct(id)
      .then(response => response.json())
      .then(data=> setProduct(data))

      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    //Guarda la funcion Navigate y la ejecuta junto al Hook con metodo DELETE
    const navigate = useNavigate()

    const handleDelete = () => {
      deleteProduct(id)
      navigate('/products')
    }

    return (
        <>
            <Header title={`Productos -> #${product.id}`}>
                <button className='formButton' onClick={handleDelete}>Eliminar</button>
            </Header>
            <div className='beforeHeaderContainer'>
                <FormProduct
                    handleSubmit={handleSubmit}
                    product={product}
                />
            </div>
        </>
    )
}

export default ProductView