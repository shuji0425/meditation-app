import axios from 'axios';

const API_URL = 'http://localhost:3000';

// PlaceholderAPIを取得
export async function getPlaceholderData() {
    try {
        const response = await axios.get(`${API_URL}/placeholder`);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch placeholder data:", error);
        throw error;
    }
}
