import React from 'react';
import { Link } from 'react-router-dom';

const StartButton = () => {
    return (
        <div className="text-center mt-4">
            <Link to="/fortune">
                <button className="bg-yellow-400 text-white text-xl px-6 py-3 rounded-full shadow-lg hover:bg-yellow-500 transition">
                    占いを始める
                </button>
            </Link>
        </div>
    );
};

export default StartButton;
