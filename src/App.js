import { BrowserRouter } from 'react-router-dom';
import './App.css';

import SideBar from './components/SideBar';
import MainArea from './components/MainArea';
import Router from './routes/Router';


function App() {
  return(
    <BrowserRouter>
        <div className='body-content'>
            <SideBar/>


            <MainArea>
            
                {/* <Header/> */}

                <Router/>

            </MainArea>
        </div>
    </BrowserRouter>
);
}

export default App;
