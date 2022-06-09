import { createContext, useState } from "react";

export const onClickOutsideContext = createContext();
const { Provider } = onClickOutsideContext;

const OnClickOutsideProvider = ({ children }) => {
    
    const [ isShown, setIsShown ] = useState(false);

    const [ width, setWidth ] = useState(window.innerWidth);

    return(
        <Provider value={{isShown, setIsShown, width, setWidth}}>
            {children}
        </Provider>
    )
}

export default OnClickOutsideProvider;
