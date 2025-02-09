import React, { useState } from 'react';

// タロットカードと対応する数秘術ナンバー
const tarotCards = [
    { number: 1, name: "The Magician", meaning: "創造力、行動、力" },
    { number: 2, name: "The High Priestess", meaning: "直感、知恵、秘密" },
    { number: 3, name: "The Empress", meaning: "豊かさ、母性、創造" },
    { number: 4, name: "The Emperor", meaning: "安定、リーダーシップ、秩序" },
    { number: 5, name: "The Hierophant", meaning: "伝統、精神性、教育" },
    { number: 6, name: "The Lovers", meaning: "愛、関係、選択" },
    { number: 7, name: "The Chariot", meaning: "成功、コントロール、勝利" },
    { number: 8, name: "Strength", meaning: "勇気、忍耐、内なる強さ" },
    { number: 9, name: "The Hermit", meaning: "内省、探求、孤独" },
    { number: 10, name: "Wheel of Fortune", meaning: "運命、変化、サイクル" },
    { number: 11, name: "Justice", meaning: "公正、因果応報、真実" },
    { number: 12, name: "The Hanged Man", meaning: "新しい視点、犠牲、待機" },
    { number: 13, name: "Death", meaning: "終わり、新しい始まり、変化" },
    { number: 14, name: "Temperance", meaning: "調和、バランス、忍耐" },
    { number: 15, name: "The Devil", meaning: "誘惑、執着、束縛" },
    { number: 16, name: "The Tower", meaning: "崩壊、突然の変化、混乱" },
    { number: 17, name: "The Star", meaning: "希望、インスピレーション、癒し" },
    { number: 18, name: "The Moon", meaning: "幻想、不安、直感" },
    { number: 19, name: "The Sun", meaning: "喜び、成功、明るい未来" },
    { number: 20, name: "Judgement", meaning: "目覚め、再生、評価" },
    { number: 21, name: "The World", meaning: "完成、達成、統合" },
];

// 数秘術ライフパスナンバーを計算する関数
const calculateLifePathNumber = (birthdate) => {
    let sum = birthdate.split("").reduce((acc, digit) => acc + parseInt(digit, 10), 0);
    
    while (sum > 21) {
        sum = sum.toString().split("").reduce((acc, digit) => acc + parseInt(digit, 10), 0);
    }
    
    return sum;
};

const KabbalahTarot = () => {
    const [birthdate, setBirthdate] = useState("");
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCalculate = () => {
        if (birthdate.length !== 8 || isNaN(birthdate)) {
            alert("誕生日を8桁（YYYYMMDD）で入力してください。");
            return;
        }
        const lifePathNumber = calculateLifePathNumber(birthdate);
        const card = tarotCards.find(card => card.number === lifePathNumber);
        setSelectedCard(card);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-300 to-pink-500 text-white p-6 text-center">
            <h1 className="text-3xl font-bold">🔢 カバラ数秘術×タロット</h1>
            <p className="mt-4 text-lg">あなたの生年月日から数秘術を計算し、対応するタロットカードを導きます。</p>

            <input
                type="text"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
                placeholder="YYYYMMDD を入力"
                className="mt-4 p-2 text-black rounded"
            />

            <button
                onClick={handleCalculate}
                className="mt-6 bg-yellow-400 text-white text-xl px-6 py-3 rounded-full shadow-lg hover:bg-yellow-500 transition"
            >
                計算する
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

export default KabbalahTarot;
