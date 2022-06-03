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

const editProduct = (data, id) => {
    console.log(data)
    return fetch(`${url}/${id}`,{
        method: "PUT",
        body: JSON.stringify(data),
        headers:{
            "Content-Type": "application/json"
        }
    })
}
const deleteProduct = (id) => {
    return fetch(`${url}/${id}`, {
        method: "DELETE"
    })
}

const getProduct = (id) => {
    return fetch(`${url}/${id}`)
}

export {getProducts, getProduct, editProduct, storeProduct, deleteProduct}