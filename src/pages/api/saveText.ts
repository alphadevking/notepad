import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const savedTextsFilePath = path.join(process.cwd(), 'data', 'savedText.json');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const newSavedText = req.body;

            const data = await fs.promises.readFile(savedTextsFilePath, 'utf-8');
            let savedTexts = JSON.parse(data);

            savedTexts.push(newSavedText);

            await fs.promises.writeFile(savedTextsFilePath, JSON.stringify(savedTexts), 'utf-8');

            console.log('Text successfully saved to file.');
            res.status(200).json({ message: 'Text successfully saved.' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to write text to file.' });
        }
    } else {
        res.status(404).json({ error: 'API route not found.' });
    }
}
