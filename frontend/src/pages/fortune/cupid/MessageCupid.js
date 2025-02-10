import React, { useState } from 'react';

// 恋愛向けメッセージ一覧
const loveMessages = [
    "💌 『ずっとあなたのことを考えているよ…』",
    "💖 『気になるけど、まだ勇気が出ない…』",
    "🌹 『もっと近づきたい。でもどうすればいい？』",
    "💔 『本当は話したいけど、距離を感じる…』",
    "✨ 『あなたと一緒にいると安心する…』",
    "🔥 『好きかもしれない。でもまだ確信が持てない…』",
    "💘 『運命を信じてもいいかな？』",
];

const MessageCupid = () => {
    const [message, setMessage] = useState("");

    const drawMessage = () => {
        setMessage(loveMessages[Math.floor(Math.random() * loveMessages.length)]);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-500 to-red-600 text-white p-6 text-center">
            <h1 className="text-3xl font-bold">💌 あの人からのメッセージ</h1>
            <p className="mt-4 text-lg">気になる相手の本音を占ってみよう！</p>

            <button
                onClick={drawMessage}
                className="mt-6 bg-yellow-400 text-white text-xl px-6 py-3 rounded-full shadow-lg hover:bg-yellow-500 transition"
            >
                メッセージを受け取る
            </button>

            {message && (
                <div className="mt-6 p-4 bg-white text-black rounded-lg shadow-lg">
                    <p className="text-xl">{message}</p>
                </div>
            )}
        </div>
    );
};

export default MessageCupid;
