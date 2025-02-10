import React from 'react';
import { Link } from 'react-router-dom';

const CupidSelect = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-400 to-red-500 text-white p-6 text-center">
            <h1 className="text-4xl font-bold">💘 キュピドンの恋愛占い</h1>
            <p className="mt-4 text-lg">あなたの恋愛について占ってみよう！</p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <Link to="/fortune/cupid/LoveLuckCupid" className="p-4 bg-white text-black rounded-lg shadow-lg hover:bg-pink-200 transition">
                    💑 恋愛運占い
                </Link>
                <Link to="/fortune/cupid/CrushCupid" className="p-4 bg-white text-black rounded-lg shadow-lg hover:bg-pink-200 transition">
                    💖 片思い占い
                </Link>
                <Link to="/fortune/cupid/CompatibilityCupid" className="p-4 bg-white text-black rounded-lg shadow-lg hover:bg-pink-200 transition">
                    ❤️ 相性占い
                </Link>
                <Link to="/fortune/cupid/MarriageCupid" className="p-4 bg-white text-black rounded-lg shadow-lg hover:bg-pink-200 transition">
                    💍 結婚占い
                </Link>
                <Link to="/fortune/cupid/BreakupCupid" className="p-4 bg-white text-black rounded-lg shadow-lg hover:bg-pink-200 transition">
                    💔 別れの危機占い
                </Link>
                <Link to="/fortune/cupid/MessageCupid" className="p-4 bg-white text-black rounded-lg shadow-lg hover:bg-pink-200 transition">
                    💌 あの人からのメッセージ
                </Link>
            </div>
        </div>
    );
};

export default CupidSelect;
