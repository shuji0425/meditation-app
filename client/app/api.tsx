const API_URL = 'http://localhost:3000/api/data';

export const fetchData = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
