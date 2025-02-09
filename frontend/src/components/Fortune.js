import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Fortune = () => {
    const [fortunes, setFortunes] = useState([]);

    useEffect(() => {
        // DjangoのAPIからデータを取得
        axios.get("http://localhost:8000/api/fortunes/")
            .then(response => {
                setFortunes(response.data); // 取得したデータを保存
            })
            .catch(error => {
                console.error("Error fetching the fortunes:", error);
            });
    }, []);

    return (
        <div>
            <h2>今日の占い</h2>
            {fortunes.length > 0 ? (
                <ul>
                    {fortunes.map(fortune => (
                        <li key={fortune.id}>{fortune.message}</li>
                    ))}
                </ul>
            ) : (
                <p>占いデータがありません。</p>
            )}
        </div>
    );
};

export default Fortune;
