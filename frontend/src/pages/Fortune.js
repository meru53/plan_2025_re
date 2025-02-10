import React from 'react';

const Fortune = () => {
    // 占いの種類とURL
    const fortunes = [
        { name: "🎴 タロット占い", url: "/fortune/tarot" },
        { name: "❤️ 恋愛運占い", url: "/fortune/cupid" },
        { name: "💼 仕事運占い", url: "/fortune/work" },
        { name: "🔮 未来予知", url: "/fortune/future" },
    ];

    // 新しいタブで開き、フォーカスを移動
    const openInNewTab = (url) => {
        const newTab = window.open(url, '_blank'); // 新しいタブを開く
        if (newTab) {
            newTab.focus(); // フォーカスを新しいタブに移動
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-300 to-pink-500 text-white">
            {/* ヘッダー */}
            <header className="p-4 text-center text-xl font-bold bg-purple-500">
                占いを選ぶ
            </header>

            {/* メインコンテンツ */}
            <section className="p-6 text-center">
                <h2 className="text-2xl font-bold">今日はどんな運勢を占う？</h2>
                <p className="mt-2">占いたいカテゴリを選んでください！</p>

                <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                    {fortunes.map((fortune, index) => (
                        <button
                            key={index}
                            className="bg-white text-black p-4 rounded-lg shadow-md hover:bg-gray-200 transition"
                            onClick={() => openInNewTab(fortune.url)}
                        >
                            {fortune.name}
                        </button>
                    ))}
                </div>
            </section>

            {/* フッター */}
            <footer className="p-4 text-center bg-purple-500">
                &copy; 2025 AI占い
            </footer>
        </div>
    );
};

export default Fortune;
