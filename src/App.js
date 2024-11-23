import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';

/* PAGES IMPORATION */
import Homepage from './Pages/HomePage/Homepage'
import ShopAll from './Pages/ShopAllPage/ShopAll';
import PeriodCare from './Pages/PeriodCarePage/Period';
import IntimateCare from './Pages/IntimateCarePage/IntimateCare';
import ToiletHygiene from './Pages/ToiletHygienePage/ToiletHygienePage';
import Hairremoval from './Pages/HairRemovalPage/Hairremoval';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Homepage' element={<Homepage />} />
        <Route path='/shopall' element={<ShopAll />} />
        <Route path='/periodcare' element={<PeriodCare />} />
        <Route path='/intimatecare' element={<IntimateCare />} />
        <Route path='/toilethygiene' element={<ToiletHygiene />}></Route>
        <Route path='/hairremoval' element={<Hairremoval />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
