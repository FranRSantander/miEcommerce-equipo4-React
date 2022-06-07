import { render, screen } from "@testing-library/react"
import Contador from './Contador'

test('Renderiza el componente Contador', () => { 
    render(<Contador/>)
    
    expect(screen.getAllByRole('button'))
 })