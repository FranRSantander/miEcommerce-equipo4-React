import { render, screen} from "@testing-library/react"
import Header from "../components/Header/Header"

test("porfis", ()=>{
    render(<Header title="hola"><button>Click</button></Header>)
        screen.debug()
            expect(screen.getByText("hola")).toBeInTheDocument()
                expect(screen.getByRole("button")).toBeInTheDocument()
})