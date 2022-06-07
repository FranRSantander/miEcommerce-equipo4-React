import { render, screen } from "@testing-library/react"
import MainArea from './MainArea'

describe('MainArea', () => { 
    test('Renderiza el children', ()=>{
        render(<MainArea><h1>Título</h1></MainArea>)
        expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument()
    })
 })