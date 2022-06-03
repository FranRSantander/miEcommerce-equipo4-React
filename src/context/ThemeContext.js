import { createContext } from "react";

export const themeContext = createContext();
const { Provider } = themeContext;

const ThemeProvider = ({ children }) => {
    
    // Funcion principal que maneja el 'onClick' en el componente del SideBar
    const handleTheme = () => {
// Funcion principal que maneja el 'onClick' en el componente del SideBar
        if(document.body.classList.contains('light')){
            document.body.classList.remove("light");
        }
        else {
            document.body.classList.add("light");
        }
    }

    return(
        <Provider value={handleTheme}>
            {children}
        </Provider>
    )
}

export default ThemeProvider;
