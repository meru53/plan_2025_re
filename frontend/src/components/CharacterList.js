import React from 'react';

const characters = [
    { name: 'ミコネコ', role: 'タロット占い', emoji: '🐱' },
    { name: 'キュピドン', role: '恋愛占い', emoji: '💖' },
    { name: 'サイバーCEO', role: '仕事運', emoji: '💼' },
    { name: 'オラクル01', role: '未来予知', emoji: '🔮' },
    { name: 'マッチー', role: '相性占い', emoji: '💑' },
];

const CharacterList = () => {
    return (
        <section className="p-6">
            <h2 className="text-2xl font-bold text-center">キャラクター紹介</h2>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                {characters.map((char, index) => (
                    <div key={index} className="bg-white text-black p-4 rounded-lg shadow-md">
                        <span className="text-3xl">{char.emoji}</span>
                        <h3 className="text-lg font-bold">{char.name}</h3>
                        <p className="text-sm">{char.role}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CharacterList;
