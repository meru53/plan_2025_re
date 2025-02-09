import React, { useState } from 'react';

// タロットカードのデータ
const tarotCards = [
    { name: "The Fool", meaning: "新しい始まり、自由、可能性" },
    { name: "The Magician", meaning: "創造力、行動、力" },
    { name: "The High Priestess", meaning: "直感、知恵、秘密" },
    { name: "The Empress", meaning: "豊かさ、母性、創造" },
    { name: "The Emperor", meaning: "安定、リーダーシップ、秩序" },
];

const OneCardTarot = () => {
    const [selectedCard, setSelectedCard] = useState(null);

    // ランダムに1枚選ぶ
    const drawCard = () => {
        const randomIndex = Math.floor(Math.random() * tarotCards.length);
        setSelectedCard(tarotCards[randomIndex]);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-300 to-pink-500 text-white p-6 text-center">
            <h1 className="text-3xl font-bold">🎴 ワンオラクル（1枚引き）</h1>
            <p className="mt-4 text-lg">1枚のカードを引いて、今日の運勢を占いましょう！</p>

            <button
                onClick={drawCard}
                className="mt-6 bg-yellow-400 text-white text-xl px-6 py-3 rounded-full shadow-lg hover:bg-yellow-500 transition"
            >
                カードを引く
            </button>

            {selectedCard && (
                <div className="mt-8 p-6 bg-white text-black rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold">{selectedCard.name}</h2>
                    <p className="mt-2">{selectedCard.meaning}</p>
                </div>
            )}
        </div>
    );
};

export default OneCardTarot;
