import { useContext } from 'react';
import { onClickOutsideContext } from '../../context/OnClickOutsideContext';

import './MainArea.css';

const MainArea = ({ children }) => {

    const { isShown, width }  = useContext(onClickOutsideContext);

    return (
        <div className="mainAreaContent">
            {children}
            {
                (width < 1024 && isShown)
                &&
                <div className="pantallaInvisible"></div>
            }
        </div>
    )
}

export default MainArea;
