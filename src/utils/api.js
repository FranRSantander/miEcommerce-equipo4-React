const url = "http://localhost:3002/products";

const getProducts = () => {
    return fetch(url)
}
//Metodo que almacena el producto
const storeProduct = (data) => {
    return fetch(url,{
        method: "POST",
        body: JSON.stringify(data),
        headers:{
            "Content-Type": "application/json"
        }
    })
}

export {getProducts, storeProduct}