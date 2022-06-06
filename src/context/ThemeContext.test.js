import { render, screen} from "@testing-library/react"
import ThemeContext from "../context/ThemeContext"
import { createContext } from "react";

export const themeContext = createContext();
const { Provider } = themeContext;

describe("ThemeContext", () => {
    /*
    test("Logica del cambio de tema harcodeado mal", () => {
        const themeChange = true;
        expect(themeChange).toBe(true)
        if (!themeChange) {
            expect(themeChange).toBe(false)
        }
    })
    */

    test("Recibo children en el Provider", () => {
        render(
          <Provider value={null}>
            <h1>Prueba</h1>
          </Provider>
        );
        expect(screen.getByText("Prueba")).toBeInTheDocument()
      });
})
  
