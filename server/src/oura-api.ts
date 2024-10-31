import axios from "axios";
import "dotenv/config";

const OURA_ACCESS_TOKEN = process.env.OURA_ACCESS_TOKEN as string;
const OURA_API_BASE_URL = process.env.OURA_API_BASE_URL as string;
// 追加のURA
const ADD_URL = '/usercollection/heartrate';
const start_datetime = 'start_datetime=2024-10-30T00:00:00-00:00'
const end_datetime = 'end_datetime=2024-10-31T00:00:00-00:00'

export async function getHeartrateData() {
    try {
        const response = await axios.get(`${OURA_API_BASE_URL}${ADD_URL}?${start_datetime}&${end_datetime}`, {
            headers: {
                Authorization: `Bearer ${OURA_ACCESS_TOKEN}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching Oura heartrate data:", error);
        throw error;
    }
}