import FormProduct from "../components/FormProduct/FormProduct"
import { render, screen} from "@testing-library/react"
import {BrowserRouter, BrowserRouter as Router, Switch, useLocation} from "react-router-dom";

const prueba = {
    title: "Nike",
    price: "10000",
    description: "Tiene Cordones"
}

const MockFormProduct = () => {
    return (
        <BrowserRouter>
            <FormProduct product={prueba.title}/>
        </BrowserRouter>
    )
}

test("Agarro datos", ()=>{         

    render(<MockFormProduct/>)
    //const input = screen.getByRole('button', { name: /cancelar/i })
    const inputLastname = screen.getByLabelText("Nombre");

    expect(inputLastname.value).toMatch("Nike");
    
})


