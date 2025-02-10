import React, { useState } from 'react';

const loveLuckMessages = [
    "🌟 今日は最高の恋愛運！素敵な出会いがあるかも！",
    "💞 恋愛運は安定、今の関係を大事にしよう。",
    "⚠️ 今日は恋愛に慎重に！誤解が生じるかも。",
];

const LoveLuckCupid = () => {
    const [message, setMessage] = useState("");

    const checkLuck = () => {
        setMessage(loveLuckMessages[Math.floor(Math.random() * loveLuckMessages.length)]);
    };

    return (
        <div className="p-6 text-center">
            <h1 className="text-3xl font-bold">💑 今日の恋愛運</h1>
            <button onClick={checkLuck} className="mt-4 bg-pink-500 text-white px-6 py-2 rounded-lg">
                恋愛運をチェック！
            </button>
            {message && <p className="mt-4 text-lg">{message}</p>}
        </div>
    );
};

export default LoveLuckCupid;
