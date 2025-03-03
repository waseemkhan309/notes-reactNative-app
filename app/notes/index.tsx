import { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, StyleSheet, Alert, ActivityIndicator } from "react-native";
import NoteList from "../../components/NoteList";
import AddNoteModal from "../../components/AddNoteModal";
import noteService from "../../services/noteService";


const NotesStaticData = [
    {
        id: "1",
        title: "First Note",
        content: "This is the first note",
    },
    {
        id: "2",
        title: "Second Note",
    },
    {
        id: "3",
        title: "Third Note",
    }
]

const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [newNote, setNewNote] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        setLoading(true);
        const response = await noteService.getNotes();

        if (response.error) {
            setError(response.error);
            Alert.alert('Error in fetchNotes: ', response.error);
        } else {
            if (Array.isArray(response.data)) {
                setNotes(response.data);
                setError(null);
            } else {
                setError("Response format issue");
                Alert.alert("Response format issue");
            }
        }

        setLoading(false);
    };

    const addNode = async () => {
        if (newNote.trim() === "") return;

        const response = await noteService.addNote(newNote);

        if (response.error) {
            // console.error("Error creating Note:(Notes)", response.error);
            Alert.alert(response.error);
            // return { error: response.error}
        } else {
            setNotes([...notes, response.data]);
        }

        setNewNote("");
        setModalVisible(false);
    };

    return (
        <>
            <View style={styles.container}>
                {
                    loading ? (
                        <ActivityIndicator size='large' color='#007bff' />
                    ) : (
                        <>
                            {error && <Text style={styles.errorText}>{error}</Text>}
                            <NoteList notes={notes} />
                        </>
                    )
                }

                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => setModalVisible(true)}
                >
                    <Text style={styles.addButtonText}> + Add Note</Text>
                </TouchableOpacity>
            </View >

            {/* Add Note Modal */}
            < AddNoteModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                newNote={newNote}
                setNewNote={setNewNote}
                addNode={addNode}
            />
        </>

    )
};

export default Notes;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: "#fff"
    },
    addButton: {
        position: "absolute",
        bottom: 20,
        left: 20,
        right: 20,
        fontSize: 18,
        alignItems: "center",
        backgroundColor: "#007BFF",
        paddingVertical: 15,
        color: "#fff",
        fontWeight: "bold",
        borderRadius: 10,
    },

    addButtonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContent: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        width: "80%",
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
    },
    input: {
        // backgroundColor: "#f5f5f5",
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        borderRadius: 5,
        marginBottom: 15,
        fontSize: 16,
    },
    modalButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    cancelButton: {
        backgroundColor: "#ccc",
        padding: 10,
        borderRadius: 5,
        flex: 1,
        marginRight: 10,
    },
    cancelButtonText: {
        color: "#333",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center",
    },
    saveButton: {
        backgroundColor: "#007bff",
        padding: 10,
        borderRadius: 5,
        flex: 1,
        marginRight: 10,
    },
    saveButtonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center",
    },
    errorText: {
        color: "red",
        textAlign: "center",
        marginBottom: 10,
        fontSize: 16
    }

});







