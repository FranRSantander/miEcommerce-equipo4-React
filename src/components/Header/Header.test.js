import { render, screen} from "@testing-library/react"
import Header from "./Header"

test("Rendediza el Header", ()=>{
    render(<Header title="hola"><button>Click</button></Header>)
       
        expect(screen.getByText("hola")).toBeInTheDocument()
        expect(screen.getByRole("button")).toBeInTheDocument()
})