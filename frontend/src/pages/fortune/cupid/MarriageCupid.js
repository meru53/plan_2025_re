import React, { useState } from 'react';

const marriageFortune = [
    "💍 あなたは近いうちに運命の人と出会う予感！",
    "💖 結婚運は安定中。今の恋愛を大切にすれば幸せな未来が待っている！",
    "💔 まだ結婚の時期ではないかも。焦らず運命の流れを待とう。",
    "✨ 理想のパートナーが現れるのは、もう少し先。でも、準備を整えておこう！",
    "🔥 大きな変化の時期！結婚につながる出会いが訪れるかも！？",
];

const MarriageCupid = () => {
    const [message, setMessage] = useState("");

    const checkMarriageFortune = () => {
        setMessage(marriageFortune[Math.floor(Math.random() * marriageFortune.length)]);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-red-300 to-pink-500 text-white p-6 text-center">
            <h1 className="text-3xl font-bold">💍 結婚占い</h1>
            <p className="mt-4 text-lg">あなたの結婚運と未来のパートナーについて占います！</p>

            <button
                onClick={checkMarriageFortune}
                className="mt-6 bg-yellow-400 text-white text-xl px-6 py-3 rounded-full shadow-lg hover:bg-yellow-500 transition"
            >
                結婚運を占う
            </button>

            {message && (
                <div className="mt-6 p-4 bg-white text-black rounded-lg shadow-lg">
                    <p className="text-xl">{message}</p>
                </div>
            )}
        </div>
    );
};

export default MarriageCupid;
