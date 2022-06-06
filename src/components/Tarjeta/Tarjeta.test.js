import Tarjeta from "./Tarjeta"
import { render, screen, fireEvent, waitFor} from "@testing-library/react"
import {BrowserRouter, BrowserRouter as Router, Switch, useLocation} from "react-router-dom";
import {renderHook} from "@testing-library/react-hooks"
import {useProduct} from "../../pages/Products/ProductsList/ProductsList"

const products =[
    {
        "title": "Mens Casual Premium Slim Fit T-Shirts",
        "price": 22.3,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "id": 2,
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        }
]

describe("Tarjeta", ()=>{
    describe("cuando hay Productos", ()=>{
        beforeEach(()=>{
            const mockFunction = jest.fn(()=>products)
            render(<BrowserRouter>
                        <Tarjeta 
                        productos={mockFunction()}
                        inputValue=""
                        />
                    </BrowserRouter>
            )
        })
        it("debe recibir los datos de la api", ()=>{
    
            const mockFunction = jest.fn(()=>products)
            render(<BrowserRouter>
                        <Tarjeta 
                        productos={mockFunction()}
                        inputValue=""
                        />
                    </BrowserRouter>
            )
        expect(mockFunction).toHaveBeenCalledTimes(1);
        })
        it("debe mostrar tantas instancias de Product como cantidad de productos provistos", ()=>{
          
        expect(screen.getAllByTestId("product-item")).toHaveLength(1)
        screen.debug()
        })
        it("debe mostrar el nombre y id del Producto", ()=>{
            const titulo = screen.getByRole("heading", {level: 4})
            const id = screen.getByTestId("product-id")
            expect(titulo.innerHTML).toMatch(/Mens Casual Premium Slim Fit T-Shirts/i)
            expect(id.innerHTML).toMatch(/2/)
        })
    })
    describe("cuando no hay productos", ()=>{
        beforeEach(()=>{
            const mockFunction = jest.fn(()=>[])
        render(<BrowserRouter>
                        <Tarjeta 
                        productos={mockFunction()}
                        inputValue=""
                        />
                    </BrowserRouter>
            )
        })
        it("debe mostrar un cartel de Cargando...", ()=>{
            const tituloCargando = screen.getByRole("heading", {level:1})
            expect(tituloCargando.innerHTML).toMatch(/cargando/i)
        })
    })
})