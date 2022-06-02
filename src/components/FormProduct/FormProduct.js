import { useForm } from '../../hooks/useForm'
import Contador from './Contador/Contador'
import './FormProduct.css'

const FormProduct = (props) => {

    const [ values, handleInputChange ] = useForm({
        title: "",
        price: "",
        description: ""
    })


    const handleFormSubmit = (e) => {
        e.preventDefault()
        props.handleSubmit(values)
    }

  return (
     <form className='formBody' onSubmit={handleFormSubmit}>
        <h3>Infromación</h3>
        <div className='formBody'>
            <label>Nombre</label>
            <input
                className='inputForm'
                placeholmi der=''
                type='text'
                name='title'
                onChange={handleInputChange}
            />
        </div>
        <div className='formBody'>
            <label>Valor</label>
            <input
            className='inputForm'
            placeholder=''
            type='text'
            name='price'
            onChange={handleInputChange}
            />
        </div>
        <Contador/>
        <div className='formBody'>
            <label>Descripción</label>
            <textarea 
            className='inputForm inputArea' 
            name="description"
            onChange={handleInputChange}
            />
        </div>
        <h3>Galería de imágenes</h3>
        <div className='formBody'>
            <label>Nueva Imagen</label>
            <input
                className='inputForm'
                placeholder=''
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

