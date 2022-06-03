import FormProduct from '../../../components/FormProduct/FormProduct'
import { storeProduct } from '../../../utils/api'

const NewProduct = () => {

    const handleSubmit = (data) => {
        storeProduct(data)
    }
    
    return (
        <FormProduct 
        handleSubmit={handleSubmit}
        />
    )
}

export default NewProduct;