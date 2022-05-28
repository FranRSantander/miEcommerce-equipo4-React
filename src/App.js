import Router from './routes/Router';
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import SideBar from './components/SideBar/SideBar';
import MainArea from './components/MainArea/MainArea';

function App() {
  return(
    <BrowserRouter>

      <div className='bodyContent'>
  
        <SideBar/>


        <MainArea>

          <Router/>

        </MainArea>
      </div>

    </BrowserRouter>
);
}

export default App;
