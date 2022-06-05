import FormProduct from "../components/FormProduct/FormProduct"
import { render, screen} from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";


const product = {
    title: "Nike",
    price: "333",
    description: "Stefan Janoski Negras",
    image: "https://cdn.shopify.com/s/files/1/0594/7506/7048/products/650w_slug-833603_012_A_PREM_c1f5a7f9-9fe4-468e-abb6-50d3ebeb202f_566x.jpg?v=1641584350"
}

const MockFormProduct = (product = null) => {
    return (
        <BrowserRouter>
            <FormProduct product={product}/>
        </BrowserRouter>
    )
}

describe('Validaciones sobre los input', () => {

    test("Inputs muestran el value que les paso", ()=>{
        render(<MockFormProduct {...product}/>)
        // const input = screen.getByRole('button', { name: /cancelar/i })
        // const input = screen.getByLabelText('Nombre')
        expect(screen.getByRole('textbox', { name: 'Nombre' }).value).toMatch('Nike')
        expect(screen.getByLabelText('Valor').value).toMatch('333')
        expect(screen.getByRole('textbox', { name: 'Descripción' }).value).toMatch('Stefan Janoski Negras')
        expect(screen.getByRole('textbox', { name: 'Nueva Imagen' }).value).toMatch('https://cdn.shopify.com/s/files/1/0594/7506/7048/products/650w_slug-833603_012_A_PREM_c1f5a7f9-9fe4-468e-abb6-50d3ebeb202f_566x.jpg?v=1641584350')
    })

    test("Inputs se muestran vacios si no les paso nada", ()=>{
        render(<MockFormProduct/>)
        expect(screen.getByRole('textbox', { name: 'Nombre' }).value).toMatch('')
        expect(screen.getByLabelText('Valor').value).toMatch('')
        expect(screen.getByRole('textbox', { name: 'Descripción' }).value).toMatch('')
        expect(screen.getByRole('textbox', { name: 'Nueva Imagen' }).value).toMatch('')
    })

})
