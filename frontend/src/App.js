import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import { RequireToken } from './components/Auth';
import Home from './components/Home';
import Todos from './components/Todos';

function App() {
  
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/home" element={
        <RequireToken>
          <Home />
        </RequireToken>
        }/>
        <Route path="/" element={
        <RequireToken>
          <Todos />
        </RequireToken>
        }/>
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
