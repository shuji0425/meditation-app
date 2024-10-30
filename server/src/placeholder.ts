import axios from "axios";

type Post = {
    user_id: number,
    id: number,
    title: string,
    body: string,
};

export async function fetchPlaceholderData(): Promise<Post[]> {
    try {
        const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    } catch (error) {
        console.error("Failed to fetch data:", error);
        throw error;
    }
}