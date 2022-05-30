import FormProduct from '../../../components/FormProduct/FormProduct'
import { storeProduct } from '../../../utils/api'

const NewProduct = () => {

    const handleSubmit = (data) => {
        storeProduct(data)
        .then(response => console.log(response))
    }
    
    return (
        <FormProduct 
        handleSubmit={handleSubmit}
        />
    )
}

export default NewProduct;