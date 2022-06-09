import { render, screen} from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"

import FormProduct from "../../../components/FormProduct/FormProduct"
import { storeProduct } from "../../../utils/api"

jest.mock('../../../utils/api')

const product = {
    title: "Nike",
    price: "333",
    description: "Stefan Janoski Negras",
    image: "https://cdn.shopify.com/s/files/1/0594/7506/7048/products/650w_slug-833603_012_A_PREM_c1f5a7f9-9fe4-468e-abb6-50d3ebeb202f_566x.jpg?v=1641584350"
}

const handleSubmit = (data) => {
    storeProduct(data)
}

const MockFormProduct = () => {
    return (
        <BrowserRouter>
            <FormProduct handleSubmit={handleSubmit}/>
        </BrowserRouter>
    )
}

test('Creando un nuevo producto', () => {
    render(<MockFormProduct/>)

    // Tomo los inputs del formulario
    const inputNombre = screen.getByRole('textbox', { name: 'Nombre' })
    const inputValor = screen.getByRole('textbox', { name: 'Valor' })
    const inputDescripcion = screen.getByRole('textbox', { name: 'Descripción' })
    const inputImagen = screen.getByRole('textbox', { name: 'Nueva Imagen' })

    // Les agrego el evento click a los inputs y el evento keyboard para simular que escribe el usuario
    userEvent.click(inputNombre)
    userEvent.keyboard(product.title)
    // Corroboro que se haya escrito en el input el valor deseado
    expect(screen.getByDisplayValue(product.title)).toBeInTheDocument()

    userEvent.click(inputValor)
    userEvent.keyboard(product.price)
    expect(screen.getByDisplayValue(product.price)).toBeInTheDocument()
    
    userEvent.click(inputDescripcion)
    userEvent.keyboard(product.description)
    expect(screen.getByDisplayValue(product.description)).toBeInTheDocument()

    userEvent.click(inputImagen)
    userEvent.keyboard(product.image)
    expect(screen.getByDisplayValue(product.image)).toBeInTheDocument()


    // Tomo el botón que envía el form, simulo que el usuario hace click en él y verifico que al
    // haber llamado a storeProduct se le hayan pasado los valores que se escribieron en los input
    const botonGuardar = screen.getByRole('button', { name: 'Guardar' })
    userEvent.click(botonGuardar)
    expect(storeProduct.mock.calls[0][0]).toEqual(product)
})
