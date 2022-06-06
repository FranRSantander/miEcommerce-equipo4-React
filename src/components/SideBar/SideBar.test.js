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
})