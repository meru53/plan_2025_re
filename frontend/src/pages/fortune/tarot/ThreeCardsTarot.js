import React, { useState } from 'react';

// タロットカードのデータ（例）
const tarotCards = [
    { name: "The Fool", meaning: "新しい始まり、自由、可能性" },
    { name: "The Magician", meaning: "創造力、行動、力" },
    { name: "The High Priestess", meaning: "直感、知恵、秘密" },
    { name: "The Empress", meaning: "豊かさ、母性、創造" },
    { name: "The Emperor", meaning: "安定、リーダーシップ、秩序" },
    { name: "The Hierophant", meaning: "伝統、精神性、教育" },
    { name: "The Lovers", meaning: "愛、関係、選択" },
    { name: "The Chariot", meaning: "成功、コントロール、勝利" },
    { name: "Strength", meaning: "勇気、忍耐、内なる強さ" },
    { name: "The Hermit", meaning: "内省、探求、孤独" },
    { name: "Wheel of Fortune", meaning: "運命、変化、サイクル" },
    { name: "Justice", meaning: "公正、因果応報、真実" },
    { name: "The Hanged Man", meaning: "新しい視点、犠牲、待機" },
    { name: "Death", meaning: "終わり、新しい始まり、変化" },
    { name: "Temperance", meaning: "調和、バランス、忍耐" },
    { name: "The Devil", meaning: "誘惑、執着、束縛" },
    { name: "The Tower", meaning: "崩壊、突然の変化、混乱" },
    { name: "The Star", meaning: "希望、インスピレーション、癒し" },
    { name: "The Moon", meaning: "幻想、不安、直感" },
    { name: "The Sun", meaning: "喜び、成功、明るい未来" },
    { name: "Judgement", meaning: "目覚め、再生、評価" },
    { name: "The World", meaning: "完成、達成、統合" },
];

const ThreeCardsTarot = () => {
    const [selectedCards, setSelectedCards] = useState([]);

    // 3枚のカードをランダムに引く
    const drawCards = () => {
        let shuffled = [...tarotCards].sort(() => 0.5 - Math.random()); // ランダムにシャッフル
        setSelectedCards(shuffled.slice(0, 3)); // 上から3枚を選ぶ
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-300 to-pink-500 text-white p-6 text-center">
            <h1 className="text-3xl font-bold">📜 三枚引き（過去・現在・未来）</h1>
            <p className="mt-4 text-lg">過去・現在・未来を占うため、3枚のカードを引きます。</p>

            <button
                onClick={drawCards}
                className="mt-6 bg-yellow-400 text-white text-xl px-6 py-3 rounded-full shadow-lg hover:bg-yellow-500 transition"
            >
                カードを引く
            </button>

            {selectedCards.length === 3 && (
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 bg-white text-black rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold">{selectedCards[0].name}</h2>
                        <p className="mt-2">【過去】{selectedCards[0].meaning}</p>
                    </div>
                    <div className="p-4 bg-white text-black rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold">{selectedCards[1].name}</h2>
                        <p className="mt-2">【現在】{selectedCards[1].meaning}</p>
                    </div>
                    <div className="p-4 bg-white text-black rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold">{selectedCards[2].name}</h2>
                        <p className="mt-2">【未来】{selectedCards[2].meaning}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ThreeCardsTarot;
