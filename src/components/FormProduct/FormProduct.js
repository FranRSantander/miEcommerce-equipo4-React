import { useForm } from '../../hooks/useForm'

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
        <div>
            <label>Nombre</label>
            <input
                placeholder=''
                type='text'
                name='title'
                onChange={handleInputChange}
            />
        </div>
        <div>
            <label>Valor</label>
            <input
            placeholder=''
            type='text'
            name='price'
            onChange={handleInputChange}
            />
        </div>
        <div>
            <label>Descripción</label>
            <textarea name="description"/>
        </div>
        <div>
            <button>-</button>
            <span >1</span>
            <button>+</button>
        </div>
        <h3>Galería de imágenes</h3>
        <div>
            <label>Nueva Imagen</label>
            <input
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

