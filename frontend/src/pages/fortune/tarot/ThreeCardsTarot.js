import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ThreeCardsTarot = () => {
    const navigate = useNavigate();

    // 吹き出しのテキスト
    const introText = [
        "こんにちは♪ AI占い師のネコミコです",
        "タロットカード占いで、あなたの運命の扉をちょっとだけ開けてみましょう",
        " ",
        "よろしければ、占いのやり方を聞いてみますか？"
    ];

    const [displayText, setDisplayText] = useState([]); // 表示中の文章
    const [lineIndex, setLineIndex] = useState(0); // 何行目まで表示したか
    const [charIndex, setCharIndex] = useState(0); // 文字の進行状態
    const [isComplete, setIsComplete] = useState(false); // 全部表示し終わったか
    
    useEffect(() => {
        if (lineIndex < introText.length) {
            if (charIndex < introText[lineIndex].length) {
                // 1文字ずつ表示
                const charTimer = setTimeout(() => {
                    setDisplayText((prev) => {
                        const newText = [...prev];
                        newText[lineIndex] = (newText[lineIndex] || "") + introText[lineIndex][charIndex];
                        return newText;
                    });
                    setCharIndex((prev) => prev + 1);
                }, 150);
                return () => clearTimeout(charTimer);
            } else {
                // 1行表示が完了 → 次の行に進む
                const lineTimer = setTimeout(() => {
                    setLineIndex((prev) => prev + 1);
                    setCharIndex(0);
                }, 1000); // 1秒待機して次の行
                return () => clearTimeout(lineTimer);
            }
        } else {
            setIsComplete(true); // 全部表示完了
        }
    }, [charIndex, lineIndex]);

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center relative">
            {/* ねこみこ（ふわふわ浮く） */}
            <motion.img 
                src="/images/nekomiko.svg" 
                alt="ネコミコ" 
                className="w-64 h-64"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />

            {/* 吹き出し */}
            <div className="bg-white text-black p-4 rounded-lg shadow-md mt-4 max-w-md">
                {displayText.map((line, index) => (
                    <p key={index} className="text-lg">{line}</p>
                ))}

                {/* 「はい」「いいえ」ボタン（全てのメッセージが表示された後） */}
                {isComplete && (
                    <div className="mt-4 flex justify-center space-x-4">
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                            はい
                        </button>
                        <button className="px-4 py-2 bg-gray-500 text-white rounded-lg">
                            いいえ
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ThreeCardsTarot;
