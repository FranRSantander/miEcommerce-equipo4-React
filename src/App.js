import Router from './routes/Router';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return(
    <BrowserRouter>
          <SideBar/>
          <MainArea>
            <Router/>
          </MainArea>
    </BrowserRouter>
);
}

export default App;
