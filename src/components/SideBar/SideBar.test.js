import { render, screen } from "@testing-library/react"
import SideBar from "./SideBar"
import { BrowserRouter } from "react-router-dom"



describe('SideBar', () => {

    beforeEach(()=>{
        render(
            <BrowserRouter>
                <SideBar/>
            </BrowserRouter>
        )
    })
    
    test('Rendriza el componente SideBar', () => {} )

     test('Link al inicio', () => {
        expect(screen.getByRole('link', {name: /Inicio/i})).toHaveAttribute('href', '/')
     })

    test('Link a la vista de Productos', () => {
        expect(screen.getByRole('link', {name: /Productos/i})).toHaveAttribute('href', '/products')
    })

    test('Link a la vista de Stores no implementada', () => {
        expect(screen.getByRole('link', {name: /Tiendas/i})).toHaveAttribute('href', '/stores')
    })
})