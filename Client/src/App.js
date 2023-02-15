import './App.css';
import {Routes, Route ,BrowserRouter} from 'react-router-dom'
import { Header, Home, Login, Navigation } from './container/Public';
import { path } from './utils/constant';

function App() {
  return (
    <div className="h-screen w-screen bg-primary">
      <BrowserRouter>
      <Header/>
      <Navigation/>
        <Routes>
          <Route path={path.HOME} element={<Home/>} >
            <Route path={path.LOGIN} element = {<Login/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
