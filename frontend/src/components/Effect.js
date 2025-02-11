import { motion } from 'framer-motion';
import React from 'react';

const SparkleEffect = () => {
    return (
        <motion.div
            className="absolute w-full h-full"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
        >
            ✨✨✨
        </motion.div>
    );
};

export default SparkleEffect;
