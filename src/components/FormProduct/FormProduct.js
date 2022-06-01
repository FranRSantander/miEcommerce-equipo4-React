import { useEffect } from 'react'
import { useForm } from '../../hooks/useForm'
import './FormProduct.css'
const FormProduct = ({ handleSubmit, product = null}) => {

    const [ values, handleInputChange, setValues ] = useForm({
        title: "",
        price: ""
    })


    const handleFormSubmit = (e) => {
        e.preventDefault()
        handleSubmit(values)
    }

    useEffect(() => {
        if(product != null){
            setValues({
                ...values,
                ...product
            })
        }
    }, [product])
    
    // useEffect(() => {
    //     if(product != null){
    //         setValues(state => ({
    //             // ...values,
    //             ...state,
    //             ...product
    //         }))
    //     }
    // }, [product])

  return (
     <form className='formBody' onSubmit={handleFormSubmit}>
        <h3>Infromación</h3>
        <div className='formBody'>
            <label>Nombre</label>
            <input
                className='inputForm'
                type='text'
                name='title'
                onChange={handleInputChange}
                value={values.title}
                // {product ? product.title : ''}
                // {product && `value=${product.title}`}
            />
        </div>
        <div className='formBody'>
            <label>Valor</label>
            <input
            className='inputForm'
            type='text'
            name='price'
            onChange={handleInputChange}
            value={values.price}
            />
        </div>
        <div className='formBody'>
            <label>Descripción</label>
            <textarea className='inputForm' name="description"/>
        </div>
        <div>
            <button>-</button>
            <span >1</span>
            <button>+</button>
        </div>
        <h3>Galería de imágenes</h3>
        <div className='formBody'>
            <label>Nueva Imagen</label>
            <input
                className='inputForm'
                type='file'
                name='image'
                onChange={handleInputChange}
            />
        </div>
        <div>
            <button type='submit'>Guardar</button>
        </div>
    </form>
  )
}

export default FormProduct;

