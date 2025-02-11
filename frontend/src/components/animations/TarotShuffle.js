import { motion } from "framer-motion";

const TarotShuffle = ({ onShuffleComplete }) => {
    return (
        <motion.div
            className="relative w-full h-40 flex justify-center items-center"
            initial={{ rotate: 0, x: 0 }}
            animate={{ rotate: [0, 15, -15, 10, -10, 0], x: [0, 5, -5, 3, -3, 0] }}
            transition={{ duration: 1, ease: "easeInOut", repeat: 3 }}
            onAnimationComplete={onShuffleComplete} // アニメーション完了時に通知
        >
            <motion.img
                src="/images/tarot_back.jpg"
                alt="Shuffling Cards"
                className="absolute w-24 h-36 shadow-lg"
                animate={{
                    x: [0, 10, -10, 5, -5, 0],
                    rotateZ: [0, 5, -5, 3, -3, 0]
                }}
                transition={{ duration: 0.5, ease: "easeInOut", repeat: Infinity }}
            />
        </motion.div>
    );
};

export default TarotShuffle;
