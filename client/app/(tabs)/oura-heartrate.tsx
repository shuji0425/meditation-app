import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { getOuraHeartrateData } from "../oura-api";

const OuraHeartrate = () => {
    const [data, setData] = useState(null);

    const fetchData = async () => {
        try {
            const response = await getOuraHeartrateData();
            setData(response);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <View>
            <Text>データ：{ data ? JSON.stringify(data) : '読み込み中...' }</Text>
            <Button title="データを取得" onPress={fetchData} />
        </View>
    );
};

export default OuraHeartrate;