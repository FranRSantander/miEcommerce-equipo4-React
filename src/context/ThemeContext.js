import { createContext } from "react";

export const themeContext = createContext();
const { Provider } = themeContext;

const ThemeProvider = ({ children }) => {
    
    const handleTheme = () => {

        if(document.body.classList.contains('light')){
            document.body.classList.remove("light");
        }
        else {
            document.body.classList.add("light");
        }
    }

    const data = {
        handleTheme
    }

    return(
        <Provider value={data}>
            {children}
        </Provider>
    )
}

export default ThemeProvider;
