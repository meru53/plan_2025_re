import React, { useState } from 'react';

const breakupFortunes = [
    "💔 別れの予感… でも話し合えば未来は変えられる！",
    "😢 最近すれ違いが多いかも… 相手の気持ちをもう一度考えてみて。",
    "⚖️ この恋は試練の時。でも、乗り越えれば絆が深まる！",
    "💞 二人の愛は強い！心配せずに信じて進もう。",
    "🔥 情熱が足りなくなっているかも。恋の火を再び燃やそう！",
];

const BreakupCupid = () => {
    const [message, setMessage] = useState("");

    const checkBreakupFortune = () => {
        setMessage(breakupFortunes[Math.floor(Math.random() * breakupFortunes.length)]);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-500 to-black text-white p-6 text-center">
            <h1 className="text-3xl font-bold">💔 別れの危機占い</h1>
            <p className="mt-4 text-lg">今の恋は続く？それとも終わる？運命を占います。</p>

            <button
                onClick={checkBreakupFortune}
                className="mt-6 bg-red-500 text-white text-xl px-6 py-3 rounded-full shadow-lg hover:bg-red-600 transition"
            >
                別れの運命を占う
            </button>

            {message && (
                <div className="mt-6 p-4 bg-white text-black rounded-lg shadow-lg">
                    <p className="text-xl">{message}</p>
                </div>
            )}
        </div>
    );
};

export default BreakupCupid;
