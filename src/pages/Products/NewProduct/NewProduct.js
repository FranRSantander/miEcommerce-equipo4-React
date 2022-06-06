import FormProduct from '../../../components/FormProduct/FormProduct'
import Header from '../../../components/Header/Header'

import { storeProduct } from '../../../utils/api'

const NewProduct = () => {

    const handleSubmit = (data) => {
        storeProduct(data)
    }
    
    return (
        <>
            <Header title='Productos -> Nuevo producto'/>
            <FormProduct 
                handleSubmit={handleSubmit}
            />
        </>
    )
}

export default NewProduct;