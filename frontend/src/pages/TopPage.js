import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';

const TopPage = () => {
    return (
        <motion.div 
            className="min-h-screen bg-gradient-to-b from-pink-300 to-purple-500 flex flex-col items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.h1 
                className="text-4xl font-bold text-white mb-6 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                ようこそ！猫型AI占い師「Mikoneko」のタロット占い
            </motion.h1>
            
            <Card className="max-w-lg w-full bg-white shadow-xl rounded-2xl p-6 text-center">
                <CardContent>
                    <motion.img 
                        src="/mikoneko.png" 
                        alt="Mikoneko" 
                        className="w-32 h-32 mx-auto mb-4 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    />
                    <motion.h2 
                        className="text-2xl font-semibold text-gray-800 mb-3"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        Mikoneko とは？
                    </motion.h2>
                    <motion.p 
                        className="text-gray-600 text-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        Mikoneko は、あなたの悩みを聞き、タロットカードで未来を占う猫型AI占い師です！
                    </motion.p>
                    <motion.p 
                        className="text-gray-600 text-lg mt-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                    >
                        さあ、今日の運勢を見てみましょう！
                    </motion.p>
                </CardContent>
            </Card>
            
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
            >
                <Link to="/fortune">
                    <Button className="mt-6 bg-pink-500 text-white text-lg px-6 py-3 rounded-full shadow-lg hover:bg-pink-600 transition">
                        今日の占いをする
                    </Button>
                </Link>
            </motion.div>
        </motion.div>
    );
};

export default TopPage;
