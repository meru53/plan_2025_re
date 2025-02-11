import { motion } from 'framer-motion';
import React, { useState } from 'react';

const TarotCard = ({ card }) => {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!flipped);
    };

    return (
        <motion.div
            className="relative w-32 h-48 cursor-pointer"
            onClick={handleFlip}
            initial={false}
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.6 }}
            style={{ transformStyle: "preserve-3d" }}
        >
            {/* 裏面（デフォルト表示） */}
            {!flipped && (
                <div className="absolute w-full h-full bg-blue-900 rounded-lg shadow-lg flex items-center justify-center">
                    <p className="text-white text-xl font-bold">🔮</p>
                </div>
            )}

            {/* 表面（クリック後に表示） */}
            {flipped && (
                <div className="absolute w-full h-full bg-white rounded-lg shadow-lg flex items-center justify-center transform rotateY-180">
                    <img src={card.image} alt={card.name} className="w-full h-full object-cover rounded-lg" />
                </div>
            )}
        </motion.div>
    );
};

export default TarotCard;
