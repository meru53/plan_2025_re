import { motion } from "framer-motion";
import React from "react";

const FramerTest = () => {
    return (
        <motion.div
            className="w-32 h-32 bg-blue-500 rounded-lg flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity }}
        >
            <p className="text-white">回転中！</p>
        </motion.div>
    );
};

export default FramerTest;
