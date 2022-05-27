import Router from './routes/Router';
import { BrowserRouter } from 'react-router-dom';
import MainArea from './components/MainArea';


function App() {
  return(
    <BrowserRouter>
          {/* <SideBar/> */}
          <MainArea>
            <Router/>
          </MainArea>
    </BrowserRouter>
);
}

export default App;
