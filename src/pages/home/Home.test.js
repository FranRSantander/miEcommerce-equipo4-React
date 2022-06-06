import Home from "./Home"
import { render, screen} from "@testing-library/react"
import {BrowserRouter} from "react-router-dom";

describe("Home", ()=>{

    beforeEach(()=>{
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        )
    })
    it("debe mostrar la cantidad de productos", ()=>{
        const cantidad = screen.getByText(/123/i)
        const productos = screen.getByText(/productos/i)
        expect(cantidad.innerHTML).toMatch("123")
        expect(productos.innerHTML).toMatch("Productos")
    })
    it("debe mostrar la cantidad de tiendas", ()=>{
        const cantidad = screen.getByText(/10/i)
        const productos = screen.getByText(/tiendas/i)
        expect(cantidad.innerHTML).toMatch("10")
        expect(productos.innerHTML).toMatch("Tiendas")
    })
    it("debe mostrar dos botones Ver Listado", ()=>{
        const boton = screen.getAllByRole("button", {name:"Ver Listado"})
        screen.debug()
        expect(boton).toHaveLength(2)
    })
    it("debe mostrar un botón Agregar Producto", ()=>{
        const boton = screen.getByRole("button", {name:"Agregar Producto"})
        expect(boton).toBeInTheDocument()
    })
    it("debe mostrar un botón Agregar Tienda", ()=>{
        const boton = screen.getByRole("button", {name:"Agregar Tienda"})
        expect(boton).toBeInTheDocument()
    })
})
        