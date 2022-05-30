const url = "http://localhost:3000/products";

const getProducts = () => {
    return fetch(url)
}

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