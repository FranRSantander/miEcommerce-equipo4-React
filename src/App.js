import Router from './routes/Router';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './components/Header';


function App() {
  return(
    <div>
         <Header>
           <h1>Holis</h1>
         </Header>
          <h2>dadadada</h2>
    </div>
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