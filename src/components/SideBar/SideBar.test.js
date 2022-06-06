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
        expect(screen.getByText(/inicio/i).closest('a')).toHaveAttribute('href', '/')
    })

    test('Link a la vista de Productos', () => {
        expect(screen.getByText(/productos/i).closest('a')).toHaveAttribute('href', '/products')
    })

    test('Link a la vista de Stores no implementada', () => {
        expect(screen.getByText(/tiendas/i).closest('a')).toHaveAttribute('href', '/stores')
    })
})