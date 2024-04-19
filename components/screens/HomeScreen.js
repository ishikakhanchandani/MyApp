    import React, { useState, useEffect } from 'react';
    import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';

    const HomeScreen = ({ navigation }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setItems(data);
        } catch (error) {
        console.error('Error fetching items:', error);
        }
    };

    const addItemToList = newItem => {
        setItems(prevItems => [...prevItems, newItem]);
    };

    return (
        <View style={styles.container}>
        <FlatList
            data={items}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
            <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => console.log('Item pressed:', item)}
            >
                <Text style={styles.titleText}>{item.title}</Text>
                <Text style={styles.descriptionText}>{item.body}{item.description}</Text>
            </TouchableOpacity>
            )}
        />
        <TouchableOpacity
            style={styles.fab}
            onPress={() => navigation.navigate('AddItem', { addItemToList })}>
            <Text style={styles.fabText}>+</Text>
        </TouchableOpacity>
        </View>
    );
    };

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    itemContainer: {
        backgroundColor: '#fff',
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    fab: {
        position: 'absolute',
        bottom: 24,
        right: 24,
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: 'teal',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
    },
    fabText: {
        fontSize: 24,
        color: 'white',
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'teal',
        marginBottom: 8,
    },
    descriptionText: {
        fontSize: 16,
        color: '#333',
    },
    });

    export default HomeScreen;
