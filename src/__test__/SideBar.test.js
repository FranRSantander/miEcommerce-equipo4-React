import { render, screen} from "@testing-library/react"
import SideBar from "../components/SideBar/SideBar"

test("Renderiza", () => {
    render(<SideBar/>)
        screen.debug();
            expect(screen.getAllByLabelText("mi")).toBeInTheDocument()
})