import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import './App.css';
import Register from './components/Register';

function App() {
  
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
