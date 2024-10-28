import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { fetchData } from '../api';

const App = () => {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const getData = async () => {
            const result = await fetchData();
            setData(result);
        };

        getData();
    }, []);

    return (
        <View>
            <Text>{data ? data.message : 'Loading...'}</Text>
        </View>
    );
};

export default App;
