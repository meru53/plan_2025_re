import React, { useState } from 'react';

const crushMessages = [
    "💖 あの人はあなたに興味を持っているかも！",
    "🤔 まだ迷いがあるみたい、もう少し様子を見よう。",
    "💔 残念だけど、今は恋愛のタイミングではないかも…",
];

const CrushCupid = () => {
    const [message, setMessage] = useState("");

    const checkCrush = () => {
        setMessage(crushMessages[Math.floor(Math.random() * crushMessages.length)]);
    };

    return (
        <div className="p-6 text-center">
            <h1 className="text-3xl font-bold">💖 片思い占い</h1>
            <button onClick={checkCrush} className="mt-4 bg-red-500 text-white px-6 py-2 rounded-lg">
                相手の気持ちを知る
            </button>
            {message && <p className="mt-4 text-lg">{message}</p>}
        </div>
    );
};

export default CrushCupid;
