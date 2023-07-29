import React, { useEffect, useState } from 'react';
import savedText from '@/../data/savedText.json'
import { useDateFromTimestamp } from '@/hooks/convertTimestamp';

type SavedText = {
    id: number;
    text: string;
};

const API_ENDPOINT = '/api/saveText'; // Move the API endpoint URL to a constant

export function Notepad(): JSX.Element {
    const [text, setText] = useState<string>('');

    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>): void {
        setText(e.target.value);
    }

    function handleSave(): void {
        const newSavedText: SavedText = {
            id: Date.now(),
            text: text,
        };

        fetch(API_ENDPOINT, {
            method: 'POST',
            body: JSON.stringify(newSavedText),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                // console.log('Text saved:', data);
                setText(''); // Clear the text area after the text has been saved
                alert('Text saved successfully.'); // Show a success message to the user
            })
            .catch((error) => {
                console.error('Error saving text:', error);
                alert('Failed to save text. Please try again.'); // Show an error message to the user
            });
    }

    const [data, setData] = useState <{ id: number; text: string; }[]>([{ id: 0, text: '' }]);

    useEffect(() => {
        const fetchData = () => {
            const data = savedText;
            // console.log(data);
            setData(data);
        }
        fetchData();
    }, [handleSave]);

    return (
        <div>
            <div className="flex flex-col items-center justify-center p-5">
                <textarea
                    className="shadow text-sm appearance-none border rounded-2xl w-full md:w-[50%] p-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleChange}
                    value={text}
                ></textarea>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-xl focus:outline-none focus:shadow-outline m-3 px-3 py-2 text-sm duration-300"
                    onClick={handleSave}
                >Save</button>
            </div>

            <div className="flex flex-wrap gap-2 m-2 items-center justify-center p-5">
                {data.map((item) => (
                    <div key={item.id} className="grid gap-2 p-5 border rounded-2xl">
                        <p className="font-bold text-xs"><span className='font-thin pr-1'>Date:</span>{useDateFromTimestamp(item.id, 'requested')}</p>
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>

        </div>
    );
}
