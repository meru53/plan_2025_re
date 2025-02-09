import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import TopPage from './pages/TopPage'; // ✅ TopPage をインポート

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<TopPage />} />  {/* ✅ ルートに TopPage を指定 */}
            </Routes>
        </Router>
    );
}

export default App;
