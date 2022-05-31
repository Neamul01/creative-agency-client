import { Route, Routes } from 'react-router-dom';
import './App.css';
import ContactUs from './components/ContactUs/ContactUs';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import OurTeam from './components/OurTeam/OurTeam';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Shared/Footer';
import Navbar from './components/Shared/Navbar';
import NotFound from './components/Shared/NotFound'

function App() {
  return (
    <div className="max-w-full">
      <div className=' flex justify-center items-center text-center'>
        <Navbar />
      </div>

      <div className=' flex justify-center items-center text-center'>
        <div className='max-w-[1280px]  '>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='home' element={<Home />}></Route>
            <Route path='portfolio' element={<Portfolio />}></Route>
            <Route path='ourteam' element={<OurTeam />}></Route>
            <Route path='contactus' element={<ContactUs />}></Route>
            <Route path='login' element={<Login />}></Route>

            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>

      <div className=' flex justify-center items-center text-center'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
