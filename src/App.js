import About from './components/About';
import Home from './components/Home';
import Labs from './components/Labs';
import Support from './components/Support';
import NotFound from './components/NotFound';
import Mainheader from './components/Mainheader';
import { NavLink, Route , Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink to='/' >Home</NavLink>
          </li>
          <li>
          <NavLink to='/about' >About</NavLink>
          </li>
          <li>
          <NavLink to='/support' >Support</NavLink>
          </li>
          <li>
          <NavLink to='/labs' >Labs</NavLink>
          </li>
         
        </ul>
      </nav>
      <Routes>
        <Route path='/' element = {<Mainheader/>}>
               {/* /* dedault route */ }
          <Route index element = {<Home/>} /> 
          <Route path='/about' element = {<About/>} />
          <Route path='/support' element = {<Support/>} />
          <Route path='/labs' element = {<Labs/>} />
          <Route path='*' element = {<NotFound/>} />
        </Route>  
      </Routes>
    </div>
  );
}

export default App;
