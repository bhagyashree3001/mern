import './App.css';
import StateDemo from './components/StateDemo';
import Parent from './components/Parent'; 
import RefExample from './components/RefExample';
import PropsPass from './components/PropsPass';
import ReduxPage from './components/ReduxPage';
import { Routes, BrowserRouter, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
function Welcome(){
  return(
    <div>Welcome To MERN Demo Application</div>
  )
};
const user ={};
function App() {
  
  return (
    <div className="App">
    < BrowserRouter>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to="state" className="nav-link">State and Effect Hook</Link>
          <Link to="parent" className="nav-link">CallBack and Memo Hook</Link>
          <Link to="ref" className="nav-link">Ref Hook</Link>
          <Link to="props-pass" className="nav-link">Props Pass</Link>
          <Link to="redux-page" className="nav-link">Redux</Link>
        </nav>
        <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/state" element={<StateDemo />} />
          <Route path="/parent" element={<Parent />} />
          <Route path="/ref" element={<RefExample />} />
          <Route path="/props-pass" element={<PropsPass />} />
          <Route path="/redux-page" element={<ReduxPage />} />
        </Routes>
        </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
