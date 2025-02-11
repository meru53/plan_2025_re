import { motion } from "framer-motion";
import { useState } from "react";
import tarotBack from "../../assets/tarot_back.svg"; // ✅ SVG をインポート

const TarotCardFlip = ({ card, onClick }) => {
    const [flipped, setFlipped] = useState(false);

    return (
        <motion.div
            className="w-24 h-36 perspective"
            onClick={() => {
                setFlipped(!flipped);
                onClick(card);
            }}
        >
            <motion.div
                className="relative w-full h-full"
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* カードの裏面 */}
                <motion.div 
                    className="absolute w-full h-full bg-red-500 rounded-lg flex items-center justify-center"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <img src={tarotBack} alt="Tarot Back" className="w-full h-full" />  {/* ✅ SVG を使用 */}
                </motion.div>

                {/* カードの表面 */}
                <motion.div 
                    className="absolute w-full h-full bg-white rounded-lg flex items-center justify-center"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    <img src={`/images/tarot_${card}.jpg`} alt={`Card ${card}`} className="w-full h-full rounded-lg" />
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default TarotCardFlip;
