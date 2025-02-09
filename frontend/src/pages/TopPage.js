import React from 'react';
import Benefits from '../components/Benefits';
import CharacterList from '../components/CharacterList';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import StartButton from '../components/StartButton';

const TopPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-300 to-purple-500 text-white">
            <Header />
            <Hero />
            <StartButton />
            <Benefits />
            <CharacterList />
            <Footer />
        </div>
    );
};

export default TopPage;