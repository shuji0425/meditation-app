const express = require('express');
const cors = require('axios');
require('dotenv').config();
const app = express();
const PORT = 3000;

// 環境変数からトークンを取得
const OURA_ACCESS_TOKEN = process.env.OURA_ACCESS_TOKEN;

// OuraAPIで情報を取得
app.get('/api/heart-rate', async (req, res) => {
    try {
        const response = await axios.get('https://api.ouraring.com/v2/userinfo', {
            headers: {
                'Authorization': `Bearer ${OURA_ACCESS_TOKEN}`,
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching heart rate data');
    }
});

// サーバーを起動
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});