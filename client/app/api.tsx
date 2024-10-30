const API_URL = 'http://localhost:3000';

export const fetchData = async () => {
    try {
        const response = await fetch(`${API_URL}/api/data`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
