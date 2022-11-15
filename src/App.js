import app from './App.module.css';
import {Route, Routes} from 'react-router-dom';
import Navbar from './Navbar';
import Contact from './Pages/Contact';
import Home from './Pages/Home';

function App() {
  return (
    <div className={app.App}>
      <Navbar />
      <Routes>
        <Route path='/contact' element={<Contact />} />
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Home />} />
      </Routes>
      {/* <div className={app.AppHeader}>
        <i className="fa-brands fa-react"></i>
        <i className="fa-brands fa-node-js"></i>
        <i className="fa-solid fa-language"></i>
      </div> */}
    </div>
  );
}

export default App;
