import React from 'react';
import { useNavigate } from 'react-router-dom';

const TarotSelect = () => {
    const navigate = useNavigate();

    // スプレッド選択肢
    const spreads = [
        { name: "🔮 ワンオラクル（1枚引き）", path: "/fortune/tarot/OneCardTarot" },
        { name: "📜 三枚引き（過去・現在・未来）", path: "/fortune/tarot/ThreeCardsTarot" },
        { name: "🌀 ケルト十字スプレッド", path: "/fortune/tarot/CelticCrossTarot" },
        { name: "⭐ ヘキサグラムスプレッド", path: "/fortune/tarot/HexagramTarot" },
        { name: "🌌 ホロスコープスプレッド", path: "/fortune/tarot/HoroscopeTarot" },
        { name: "🔢 カバラ数秘術との組み合わせ", path: "/fortune/tarot/KabbalahTarot" },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-300 to-pink-500 text-white p-6 text-center">
            <h1 className="text-3xl font-bold">🎴 タロット占い</h1>
            <p className="mt-4 text-lg">占いの方法を選んでください！</p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
                {spreads.map((spread, index) => (
                    <button
                        key={index}
                        onClick={() => navigate(spread.path)}
                        className="bg-white text-black p-4 rounded-lg shadow-md hover:bg-gray-200 transition"
                    >
                        {spread.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TarotSelect;
