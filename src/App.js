import app from './App.module.css';
import {Route, Routes} from 'react-router-dom';
import Navbar from './Navbar';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import BackToTop from './BackToTop';

function App() {
  return (
    <div className={app.App}>
      <Navbar />
      {/* <BackToTop /> */}
      <Routes>
        <Route path='/contact' element={<Contact />} />
        <Route path='/home'  element={<Home />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
