import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const NoteItem = (
    { noteitem, onDeleteNote, onEdit }: {
        noteitem: { text: string, $id: string },
        onDeleteNote: (id: string) => void,
        onEdit: (id: string, text:string) => void
    }
) => {
    const [isEditing, setisEditing] = useState(false);
    const [editedText, setEditedText] = useState(noteitem.text);
    const inputRef = useRef(null);

    const handleSave = () => {
        if (editedText.trim() === '') return;

        onEdit(noteitem.$id, editedText);
        setisEditing(false);
    }

    return (
        <View style={styles.NoteItem}>
            {
                isEditing ? (
                    <TextInput
                        ref={inputRef}
                        // style={styles.input}
                        value={editedText}
                        onChangeText={setEditedText}
                        autoFocus
                        onSubmitEditing={handleSave}
                        returnKeyType='done'
                    />
                ) : (
                    <Text> {noteitem.text} </Text>
                )
            }

            <View style={styles.actions}>

                {
                    isEditing ? (
                        <TouchableOpacity onPress={() => {
                            handleSave();
                            inputRef.current.blur();
                        }}
                        >
                            <Text style={styles.edit}>SaveIcon</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity onPress={() => setisEditing(true)}>
                            <Text style={styles.edit}>Edit</Text>
                        </TouchableOpacity>
                    )
                }

                <TouchableOpacity onPress={() => onDeleteNote(noteitem.$id)}>
                    <Text style={styles.deleteText}>X</Text>
                </TouchableOpacity>
            </View>
        </View >
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
    deleteText: {
        fontSize: 18,
        color: 'red',
        fontWeight: '800'
    },
    actions: {
        flexDirection: 'row'
    },
    edit: {
        fontSize: 18,
        marginRight: 10,
        color: 'blue'
    }
});