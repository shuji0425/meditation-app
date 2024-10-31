import axios from "axios";

const API_URL = 'http://localhost:3000';

// OuraAPIを取得
export async function getOuraHeartrateData() {
    try {
        const response = await axios.get(`${API_URL}/oura/heartrate`);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch oura data:", error);
        return error;
    }
}