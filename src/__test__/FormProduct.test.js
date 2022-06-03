import FormProduct from "../components/FormProduct/FormProduct"
import { render, screen} from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";


const MockFormProduct = () => {

    const prueba = {
        title: "Zapatilla",
        price: "333",
        description: "Una zapatilla"
    }

    return (
        <BrowserRouter>
            <FormProduct product={prueba}/>
        </BrowserRouter>
    )
}

test("Agarro datos", ()=>{

    
   
    render(<MockFormProduct/>)
    // const input = screen.getByRole('button', { name: /cancelar/i })
    // console.log(input)
    // const input = screen.getByLabelText('Nombre')
    expect(screen.getByLabelText('Nombre').value).toMatch('Zapatilla')
    screen.debug();
})
