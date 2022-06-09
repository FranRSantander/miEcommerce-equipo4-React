import { BrowserRouter } from 'react-router-dom';

import './App.css';
import SideBar from './components/SideBar/SideBar';
import MainArea from './components/MainArea/MainArea';
import Router from './routes/Router';

import ThemeProvider from './context/ThemeContext';
import OnClickOutsideProvider from './context/OnClickOutsideContext';

function App() {

  return(
    <ThemeProvider>
        <BrowserRouter>
            <OnClickOutsideProvider>
                <div className='bodyContent'>
                    <SideBar/>

                    <MainArea>
                        <Router/>
                    </MainArea>
                </div>
            </OnClickOutsideProvider>
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
