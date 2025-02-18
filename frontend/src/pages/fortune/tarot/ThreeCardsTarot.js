import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import tarotBack from "../../../assets/tarot_back.svg";

const ThreeCardsTarot = () => {
    const navigate = useNavigate();

    // **メッセージのステップ**
    const steps = [
        "シャッフルされたタロットカードからこちらで選んだカードを4枚置きます。\nこの中から気になったカードを合計3枚選んでいきます。",
        "もし、この中に気になるカードがなければ「シャッフル」してください。\n「シャッフル」は何度もできます。",
        "一度選んだカードもクリックすると選びなおせます。"
    ];

    const [stepIndex, setStepIndex] = useState(0); // **現在のステップ**
    const [displayText, setDisplayText] = useState(""); // **表示中のテキスト**
    const [charIndex, setCharIndex] = useState(0); // **現在の文字位置**
    const [cardsOnTable, setCardsOnTable] = useState([]); // **テーブル上のカード**
    const [selectedCards, setSelectedCards] = useState([]); // **選んだカード**
    const [shuffling, setShuffling] = useState(false);
    const [highlightedCard, setHighlightedCard] = useState(null); // **点滅カード**
    const [showShuffleButton, setShowShuffleButton] = useState(false);

    useEffect(() => {
        if (charIndex < steps[stepIndex].length) {
            const timer = setTimeout(() => {
                setDisplayText(prev => prev + steps[stepIndex][charIndex]);
                setCharIndex(charIndex + 1);
            }, 50);
            return () => clearTimeout(timer);
        } else {
            if (stepIndex === 0) {
                startCardAnimation();
            } else if (stepIndex === 1) {
                setShowShuffleButton(true);
            }
        }
    }, [charIndex]);

    // **4枚のカードをゆっくり並べる**
    const startCardAnimation = async () => {
        const newCards = [1, 2, 3, 4]; // ダミーのカードID
        for (let i = 0; i < newCards.length; i++) {
            await new Promise(resolve => setTimeout(resolve, 1000)); // 1秒間隔でカードを置く
            setCardsOnTable(prev => [...prev, newCards[i]]);
        }
        await new Promise(resolve => setTimeout(resolve, 3000)); // 3秒停止
        highlightCard(1);
    };

    // **カードを1枚点滅（5秒）**
    const highlightCard = async (card) => {
        setHighlightedCard(card);
        await new Promise(resolve => setTimeout(resolve, 5000)); // 5秒間点滅
        moveCardToSelection(card);
    };

    // **選んだカードを下の枠に移動**
    const moveCardToSelection = async (card) => {
        setSelectedCards(prev => [...prev, card]);
        setCardsOnTable(prev => prev.filter(c => c !== card));
        setHighlightedCard(null);
        await new Promise(resolve => setTimeout(resolve, 3000)); // 3秒停止

        if (selectedCards.length < 2) {
            highlightCard(selectedCards.length + 2); // 次のカードを点滅
        } else {
            setStepIndex(1);
            setDisplayText("");
            setCharIndex(0);
        }
    };

    // **シャッフル**
    const shuffleCards = () => {
        setShuffling(true);
        setCardsOnTable([]);
        setSelectedCards([]);
        setShowShuffleButton(false);
        setTimeout(() => {
            startCardAnimation();
            setShuffling(false);
        }, 5000);
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center relative">
            {/* 🐱 右上に移動したネコミコ */}
            <motion.img 
                src="/images/nekomiko.svg" 
                alt="ネコミコ" 
                className="w-32 h-32 absolute top-4 right-4"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />

            {/* 💬 吹き出し（ステップごとにメッセージ更新） */}
            <div className="bg-white text-black p-4 rounded-lg shadow-md mt-4 max-w-md">
                <p className="text-lg">{displayText}</p>
            </div>

            {/* 📜 ワイン色のテーブル（4枚のカード置き場） */}
            <div className="bg-purple-900 w-96 h-40 rounded-lg shadow-lg flex items-center justify-center mt-8 relative">
                <p className="text-yellow-200 absolute top-2">ここに4枚のカードが並びます</p>
                {cardsOnTable.map((card, index) => (
                    <motion.img 
                        key={index} 
                        src={tarotBack} 
                        alt={`Card ${card}`} 
                        className="w-20 h-32 mx-2"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.5 }}
                        style={{
                            border: highlightedCard === card ? "2px dashed yellow" : "none"
                        }}
                    />
                ))}
            </div>

            {/* 🔳 3枚のカード枠（黄色点線） */}
            <div className="flex space-x-4 mt-6">
                {Array.from({ length: 3 }).map((_, i) => (
                    <div 
                        key={i} 
                        className="w-24 h-32 border-2 border-yellow-400 border-dashed rounded-lg flex items-center justify-center"
                    >
                        {selectedCards[i] && (
                            <motion.img 
                                src={tarotBack} 
                                alt={`Selected ${i + 1}`} 
                                className="w-full h-full"
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            />
                        )}
                    </div>
                ))}
            </div>

            {/* 🔄 シャッフルボタン（5秒点滅） */}
            {showShuffleButton && (
                <motion.button 
                    className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md"
                    onClick={shuffleCards}
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ repeat: Infinity, duration: 5 }}
                >
                    シャッフル
                </motion.button>
            )}
        </div>
    );
};

export default ThreeCardsTarot;
