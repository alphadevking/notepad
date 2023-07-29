import React, { useState, useEffect } from "react";

export const Library = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/data/savedText.json")
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div className="flex flex-col items-center justify-center p-5 sm:p-0">
            {data.map((item: {id: any, text: string}) => (
                <div key={item.id} className="mb-2 p-2 border rounded">
                    <p className="font-bold text-sm">ID: {item.id}</p>
                    <p>{item.text}</p>
                </div>
            ))}
        </div>
    );
};
