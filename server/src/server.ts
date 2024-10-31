import express from 'express';
import cors from 'cors';
import { fetchPlaceholderData } from './placeholder';
import { getHeartrateData } from './oura-api';

const app = express();
const PORT = 3000;

app.use(cors());
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from Express!' });
});

app.get('/placeholder', async (req, res) => {
    try {
        const data = await fetchPlaceholderData();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch placeholder data" });
    }
});

app.get('/oura/heartrate', async (req, res) => {
    try {
        const data = await getHeartrateData();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch oura Heartrate data" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
