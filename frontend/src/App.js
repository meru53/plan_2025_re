import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Fortune from './pages/Fortune';
import TarotSelect from './pages/TarotSelect';
import TopPage from './pages/TopPage';
import CelticCrossTarot from './pages/fortune/tarot/CelticCrossTarot';
import HexagramTarot from './pages/fortune/tarot/HexagramTarot';
import HoroscopeTarot from './pages/fortune/tarot/HoroscopeTarot';
import KabbalahTarot from './pages/fortune/tarot/KabbalahTarot';
import OneCardTarot from './pages/fortune/tarot/OneCardTarot';
import ThreeCardsTarot from './pages/fortune/tarot/ThreeCardsTarot';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<TopPage />} />
                <Route path="/fortune" element={<Fortune />} />
                <Route path="/fortune/tarot" element={<TarotSelect />} />
                <Route path="/fortune/tarot/OneCardTarot" element={<OneCardTarot />} />
                <Route path="/fortune/tarot/ThreeCardsTarot" element={<ThreeCardsTarot />} />
                <Route path="/fortune/tarot/hexagramTarot" element={<HexagramTarot />} />
                <Route path="/fortune/tarot/CelticCrossTarot" element={<CelticCrossTarot />} />
                <Route path="/fortune/tarot/HoroscopeTarot" element={<HoroscopeTarot />} />
                <Route path="/fortune/tarot/KabbalahTarot" element={<KabbalahTarot />} />
            </Routes>
        </Router>
    );
}

export default App;