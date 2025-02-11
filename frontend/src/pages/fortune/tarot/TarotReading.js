import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TarotCard from '../../../components/TarotCard';

const TarotReading = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        // Django API からランダムなタロットカードを取得
        axios.get('/api/tarot/random?count=3')
            .then(response => setCards(response.data))
            .catch(error => console.error("Error fetching tarot cards:", error));
    }, []);

    return (
        <div className="flex flex-col items-center p-6 min-h-screen bg-gradient-to-b from-purple-900 to-indigo-600 text-white">
            <h1 className="text-4xl font-bold">🔮 みこねこのタロット占い 🔮</h1>
            <p className="mt-4 text-lg">カードを選んで、運勢を占おう！</p>

            <div className="mt-8 flex space-x-6">
                {cards.map((card, index) => (
                    <TarotCard key={index} card={card} />
                ))}
            </div>
        </div>
    );
};

export default TarotReading;
