import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NoteItem = ({ noteitem }) => {
    return (
        <View style={styles.NoteItem}>
            <Text > {noteitem.text} </Text>
        </View>
    )
}

export default NoteItem;

const styles = StyleSheet.create({
    NoteItem: {
        backgroundColor: "#f5f5f5",
        padding: 15,
        borderRadius: 5,
        marginVertical: 5,
        flexDirection: "row",
        justifyContent: "space-between",
    },
});