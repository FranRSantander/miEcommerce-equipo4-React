import { useEffect } from 'react'
import { useForm } from '../../hooks/useForm'
import Contador from './Contador/Contador'
import { useNavigate} from 'react-router-dom';
import './FormProduct.css'

const FormProduct = ({ handleSubmit, product = null}) => {

    const [ values, handleInputChange, setValues ] = useForm({
        title: "",
        price: "",
        description: ""
    })

    //almacena el useNavigate y lo ejecuta junto al metedo POST que se consume mediante prop
    const navigate = useNavigate();
    const handleFormSubmit = (e) => {
        e.preventDefault()
        handleSubmit(values);
        navigate('/products')
    }

    useEffect(() => {
        if(product != null){
            setValues({
                ...values,
                ...product
            })
        }
    }, [product])
    
  return (
     <form className='formBody' onSubmit={handleFormSubmit}>
        <h3>Infromación</h3>
        <div className='formBody'>
            <label>Nombre</label>
            <input
                required
                className='inputForm'
                type='text'
                name='title'
                onChange={handleInputChange}
                value={values.title}
            />
        </div>
        <div className='formBody'>
            <label>Valor</label>
            <input
                required
                className='inputForm'
                type='text'
                name='price'
                onChange={handleInputChange}
                value={values.price}
            />
        </div>
        <Contador/>
        <div className='formBody'>
            <label>Descripción</label>
            <textarea 
                required
                className='inputForm inputArea' 
                type='text'
                name="description"
                value={values.description}
                onChange={handleInputChange}
            />
        </div>
        <h3>Galería de imágenes</h3>
        <div className='formBody'>
            <label>Nueva Imagen</label>
            <input
                className='inputForm'
                type='text'
                name='image'
                value={values.image}
                onChange={handleInputChange}
            />
        </div>
        <div>
            <button className='saveButon' type='button' onClick={()=>navigate('/products')}>cancelar</button>
            <button className='saveButon' type='submit'>Guardar</button>
        </div>
    </form>
  )
}

export default FormProduct;

