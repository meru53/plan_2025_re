import React, { useState } from 'react';

const compatibilityResults = [
    "💞 二人は最高の相性！運命の相手かも！",
    "🤔 価値観の違いがあるかも、理解しあうことが大事。",
    "💔 相性はあまりよくないかも…でも努力次第で変えられる！",
];

const CompatibilityCupid = () => {
    const [message, setMessage] = useState("");

    const checkCompatibility = () => {
        setMessage(compatibilityResults[Math.floor(Math.random() * compatibilityResults.length)]);
    };

    return (
        <div className="p-6 text-center">
            <h1 className="text-3xl font-bold">❤️ 相性占い</h1>
            <button onClick={checkCompatibility} className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg">
                相性を占う
            </button>
            {message && <p className="mt-4 text-lg">{message}</p>}
        </div>
    );
};

export default CompatibilityCupid;
