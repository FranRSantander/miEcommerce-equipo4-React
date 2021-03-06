import { useForm } from '../../hooks/useForm'
import './FormProduct.css'
const FormProduct = (props) => {

    const [ values, handleInputChange ] = useForm({
        title: "",
        price: ""
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
                placeholder=''
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

