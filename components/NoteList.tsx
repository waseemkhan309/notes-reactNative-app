import React from 'react';
import { FlatList, Text, View } from 'react-native';
import NoteItem from './NoteItem';

const NoteList = ({ notes,onDeleteNote,onEdit }) => {
    return (
        <View>
            <FlatList
                data={notes}
                keyExtractor={(item) => item.$id}
                renderItem={({ item }) => <NoteItem
                    noteitem={item}
                    onDeleteNote={onDeleteNote}
                    onEdit={onEdit}
                />}
            />
        </View>
    )
}

export default NoteList;


