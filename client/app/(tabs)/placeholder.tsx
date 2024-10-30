import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { getPlaceholderData } from "../pleceholderApi";

interface Post {
    id: number;
    title: string;
    body: string;
}

const Placeholder = () => {
    const [data, setData] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const posts = await getPlaceholderData();
                setData(posts);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    if (loading) {
        return <Text>Loading...</Text>;
    }

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View>
                    <Text>ID:{item.id}</Text>
                    <Text>Title:{item.title}</Text>
                    <Text>Text:{item.body}</Text>
                    <br></br>
                </View>
            )}
        />
    );
}

export default Placeholder;