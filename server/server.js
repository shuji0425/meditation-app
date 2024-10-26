const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// CORSを有効にする
app.use(cors());
app.use(express.json());

// サンプルエンドポイント
app.get('/', (req, res) => {
    res.send('Hello from the server!');
});

// サーバーを起動
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});