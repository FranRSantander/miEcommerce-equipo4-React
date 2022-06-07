import FormProduct from '../../../components/FormProduct/FormProduct'
import Header from '../../../components/Header/Header'

import { storeProduct } from '../../../utils/api'

import '../../../components/Header/BeforeHeader.css'

const NewProduct = () => {

    const handleSubmit = (data) => {
        storeProduct(data)
    }
    
    return (
        <>
            <Header title='Productos -> Nuevo producto'/>
            <div className='beforeHeaderContainer'>
                <FormProduct 
                    handleSubmit={handleSubmit}
                />
            </div>
        </>
    )
}

export default NewProduct;