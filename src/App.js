import Router from './routes/Router';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';


function App() {
  return(
         <Home/>    
  );
}

export default App;

/*
<BrowserRouter>
          <SideBar/>
          <MainArea>
            <Router/>
          </MainArea
  </BrowserRouter>
    
*/