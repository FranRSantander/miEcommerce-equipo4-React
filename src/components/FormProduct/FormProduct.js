import { useEffect } from 'react'
import { useForm } from '../../hooks/useForm'
import Contador from './Contador/Contador'
import { useNavigate} from 'react-router-dom';
import './FormProduct.css'

const FormProduct = ({ handleSubmit, product = null}) => {

    const [ values, handleInputChange, setValues ] = useForm({
        title: "",
        price: "",
        description: "",
        image: ""
    })

    //almacena el useNavigate y lo ejecuta junto al metodo POST que se consume mediante prop
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [product])
    
  return (
     <form className='formBody' onSubmit={handleFormSubmit}>
        <h3>Información</h3>
        <div className='formBody'>
            <label htmlFor='title'>Nombre</label>
<<<<<<< HEAD
            <input id='title'
=======
            <input
>>>>>>> 77cd03cd7a4df9a9044e8c8fb692ff967844e9c1
                required
                id='title'
                className='inputForm'
                type='text'
                name='title'
                onChange={handleInputChange}
                value={values.title}
            />
        </div>
        <div className='formBody'>
            <label htmlFor='price'>Valor</label>
            <input
                required
                id='price'
                className='inputForm'
                type='text'
                name='price'
                onChange={handleInputChange}
                value={values.price}
            />
        </div>
        <Contador/>
        <div className='formBody'>
            <label htmlFor='description'>Descripción</label>
            <textarea
                id="description"
                className='inputForm inputArea' 
                type='text'
                name="description"
                value={values.description}
                onChange={handleInputChange}
            />
        </div>
        <h3>Galería de imágenes</h3>
        <div className='formBody'>
            <label htmlFor='image'>Nueva Imagen</label>
            <input
                id="image"
                className='inputForm'
                type='text'
                name='image'
                value={values.image}
                onChange={handleInputChange}
            />
        </div>
        <div className='buttonsContainer'>
            <button className='formButton' type='button' onClick={()=>navigate('/products')}>Cancelar</button>
            <button className='formButton' type='submit'>Guardar</button>
        </div>
    </form>
  )
}

export default FormProduct;
