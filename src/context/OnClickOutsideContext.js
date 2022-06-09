import { createContext, useState } from "react";

export const onClickOutsideContext = createContext();
const { Provider } = onClickOutsideContext;

const OnClickOutsideProvider = ({ children }) => {
    
    const [ isShown, setIsShown ] = useState(true);
    console.log(isShown);

    return(
        <Provider value={{isShown, setIsShown}}>
            {children}
        </Provider>
    )
}

export default OnClickOutsideProvider;
