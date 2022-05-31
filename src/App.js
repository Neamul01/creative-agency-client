import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Footer from './components/Shared/Footer';
import Navbar from './components/Shared/Navbar';

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
