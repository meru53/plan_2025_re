import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ThreeCardsTarotResult = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const selectedCards = location.state?.selectedCards || [];  // 受け取ったカード番号
    const [tarotResult, setTarotResult] = useState("");  // 占い結果メッセージ
    const [cardDetails, setCardDetails] = useState([]); // カードの詳細情報

    useEffect(() => {
        if (selectedCards.length === 3) {
            fetch(`/api/tarot/result?cards=${selectedCards.join(",")}`)
                .then(response => response.json())
                .then(data => {
                    setTarotResult(data.message);
                    setCardDetails(data.cards);  // 各カードの詳細を取得
                })
                .catch(error => console.error("Error fetching tarot result:", error));
        }
    }, [selectedCards]);

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-4">🔮 あなたのタロット占い結果 🔮</h1>

            {/* 選んだカードの表示 */}
            <div className="flex space-x-4">
                {cardDetails.map((card, index) => (
                    <div key={index} className="text-center">
                        <img src={`/images/tarot_${card.id}.jpg`} alt={card.name} className="w-24 h-36 shadow-lg" />
                        <p className="mt-2">{card.name}</p>
                        <p className="text-sm text-gray-400">{card.meaning}</p>
                    </div>
                ))}
            </div>

            {/* 占い結果 */}
            <div className="mt-6 p-4 bg-black text-yellow-300 rounded-lg shadow-md max-w-lg text-center">
                <p className="text-lg">{tarotResult || "占い結果を取得中..."}</p>
            </div>

            {/* もう一度占うボタン */}
            <button
                onClick={() => navigate("/fortune/tarot")}
                className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md"
            >
                もう一度占う
            </button>
        </div>
    );
};

export default ThreeCardsTarotResult;
