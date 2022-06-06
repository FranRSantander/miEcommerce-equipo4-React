import Tarjeta from "./Tarjeta"
import { render, screen} from "@testing-library/react"
import {BrowserRouter, BrowserRouter as Router, Switch, useLocation} from "react-router-dom";

const products =[
    {
    "title": "Mens Casual Premium Slim Fit T-Shirts",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "id": 2,
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
    "title": "Mens Cotton JacketCAMBIOO2",
    "price": 55.99,
    "id": 3,
    "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    }
]

describe("Tarjeta", ()=>{
    describe("cuando hay Productos", ()=>{
        beforeEach(()=>{
            render(<BrowserRouter>
                <Tarjeta 
                productos={products}
                inputValue=""
                />
                </BrowserRouter>
            )
        })
        it("debe mostrar tantas instancias de Product como cantidad de productos provistos", ()=>{
            expect(screen.getAllByTestId("product-item")).toHaveLength(2)
        })
        it("debe mostrar el nombre, id y la imagen del Producto", ()=>{
            const tituloElementos = screen.getAllByRole("heading", {level: 4})
            const titulos = tituloElementos.map((element)=> element.textContent)
            expect(titulos).toContain("Mens Casual Premium Slim Fit T-Shirts")
            expect(titulos).toContain("Mens Cotton JacketCAMBIOO2")
            
            const idElementos = screen.getAllByTestId("product-id")
            const ids = idElementos.map((element)=> element.textContent) 
            expect(ids).toContain("#2")
            expect(ids).toContain("#3")
            
            const imageElementos = screen.getAllByAltText("product")
            expect(imageElementos[0]).toHaveAttribute("src", "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg")
            expect(imageElementos[1]).toHaveAttribute("src", "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg")
        })
    })
    describe("cuando se filtra por nombre de producto", ()=>{
        beforeEach(()=>{
            render(<BrowserRouter>
                <Tarjeta 
                productos={products}
                inputValue="cotton"
                />
                </BrowserRouter>
            )
        })
        it("debe mostrar solo el producto cuyo nombre se ingreso", ()=>{
            const titleElement = screen.getByRole("heading", {level: 4})
            expect(titleElement.innerHTML).toMatch("Mens Cotton JacketCAMBIOO2")
        })
    }) 

    describe("cuando no hay productos", ()=>{
        beforeEach(()=>{
        const prodVacio = []
        render(<BrowserRouter>
                <Tarjeta 
                productos={prodVacio}
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
