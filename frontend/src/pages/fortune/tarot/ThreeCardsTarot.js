import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TarotCardFlip from "../../../components/animations/TarotCardFlip"; // ✅ 正しい相対パスに修正
import TarotShuffle from "../../../components/animations/TarotShuffle"; // ✅ 修正

const ThreeCardsTarot = () => {
    const navigate = useNavigate();
    
    const allCards = Array.from({ length: 78 }, (_, i) => i + 1);
    const [visibleCards, setVisibleCards] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);
    const [shuffling, setShuffling] = useState(false);

    useEffect(() => {
        shuffleCards();
    }, []);

    const shuffleCards = () => {
        setShuffling(true);
        setTimeout(() => {
            const shuffled = [...allCards].sort(() => Math.random() - 0.5);
            setVisibleCards(shuffled.slice(0, 10));
            setShuffling(false);
        }, 3000);
    };

    const selectCard = (card) => {
        if (selectedCards.length < 3) {
            setSelectedCards([...selectedCards, card]);
            setVisibleCards(visibleCards.filter(c => c !== card));
        }
    };

    const finalizeSelection = () => {
        if (selectedCards.length === 3) {
            navigate("/fortune/tarot/three-cards-result", { state: { selectedCards } });
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-4">🔮 3枚引きタロット 🔮</h1>

            {/* シャッフルアニメーション */}
            {shuffling ? <TarotShuffle onShuffleComplete={() => setShuffling(false)} /> : null}

            {/* シャッフルボタン */}
            <button onClick={shuffleCards} className="mb-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md">
                シャッフル
            </button>

            {/* カード選択 */}
            <div className="grid grid-cols-5 gap-2">
                {!shuffling && visibleCards.map((card, index) => (
                    <TarotCardFlip key={index} card={card} onClick={selectCard} />
                ))}
            </div>

            {/* 選択済みカード */}
            <div className="mt-6 flex space-x-4">
                {selectedCards.map((card, index) => (
                    <img key={index} src={`/images/tarot_${card}.jpg`} alt={`Card ${card}`} className="w-20 h-32 rounded-lg" />
                ))}
            </div>

            {/* 3枚選んだら決定ボタンを表示 */}
            {selectedCards.length === 3 && (
                <button onClick={finalizeSelection} className="mt-6 px-6 py-2 bg-green-500 text-white rounded-lg shadow-md">
                    このカードに決める
                </button>
            )}
        </div>
    );
};

export default ThreeCardsTarot;
