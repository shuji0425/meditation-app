import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList } from "react-native";
import { getOuraHeartrateData } from "../oura-api";

interface Post {
    bpm: number;
    source: string;
    timestamp: string;
}

const OuraHeartrate = () => {
    const [data, setData] = useState<Post[]>([]);

    const fetchData = async () => {
        try {
            const response = await getOuraHeartrateData();
            setData(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        // <Button title="データを取得" onPress={fetchData} />
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <View>
                    <Text>bpm:{item.bpm}</Text>
                    <Text>source:{item.source}</Text>
                    <Text>source:{item.timestamp}</Text>
                    <br></br>
                </View>
            )}
        />
    );
};

export default OuraHeartrate;