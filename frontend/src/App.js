import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CupidSelect from './pages/CupidSelect';
import Fortune from './pages/Fortune';
import BreakupCupid from './pages/fortune/cupid/BreakupCupid';
import CompatibilityCupid from './pages/fortune/cupid/CompatibilityCupid';
import CrushCupid from './pages/fortune/cupid/CrushCupid';
import LoveLuckCupid from './pages/fortune/cupid/LoveLuckCupid';
import MarriageCupid from './pages/fortune/cupid/MarriageCupid';
import MessageCupid from './pages/fortune/cupid/MessageCupid';
import CelticCrossTarot from './pages/fortune/tarot/CelticCrossTarot';
import HexagramTarot from './pages/fortune/tarot/HexagramTarot';
import HoroscopeTarot from './pages/fortune/tarot/HoroscopeTarot';
import KabbalahTarot from './pages/fortune/tarot/KabbalahTarot';
import OneCardTarot from './pages/fortune/tarot/OneCardTarot';
import ThreeCardsTarot from './pages/fortune/tarot/ThreeCardsTarot';
import ThreeCardsTarotResult from "./pages/fortune/tarot/ThreeCardsTarotResult";
import TarotSelect from './pages/TarotSelect';
import TopPage from './pages/TopPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<TopPage />} />
                <Route path="/fortune" element={<Fortune />} />
                <Route path="/fortune/cupid" element={<CupidSelect />} />
                <Route path="/fortune/cupid/BreakupCupid" element={<BreakupCupid />} />
                <Route path="/fortune/cupid/CompatibilityCupid" element={<CompatibilityCupid />} />
                <Route path="/fortune/cupid/CrushCupid" element={<CrushCupid />} />
                <Route path="/fortune/cupid/LoveLuckCupid" element={<LoveLuckCupid />} />
                <Route path="/fortune/cupid/MarriageCupid" element={<MarriageCupid />} />
                <Route path="/fortune/cupid/MessageCupid" element={<MessageCupid />} />
                <Route path="/fortune/tarot" element={<TarotSelect />} />
                <Route path="/fortune/tarot/OneCardTarot" element={<OneCardTarot />} />
                <Route path="/fortune/tarot/ThreeCardsTarot" element={<ThreeCardsTarot />} />
                <Route path="/fortune/tarot/ThreeCardsTarotResult" element={<ThreeCardsTarotResult />} />
                <Route path="/fortune/tarot/hexagramTarot" element={<HexagramTarot />} />
                <Route path="/fortune/tarot/CelticCrossTarot" element={<CelticCrossTarot />} />
                <Route path="/fortune/tarot/HoroscopeTarot" element={<HoroscopeTarot />} />
                <Route path="/fortune/tarot/KabbalahTarot" element={<KabbalahTarot />} />
            </Routes>
        </Router>
    );
}

export default App;