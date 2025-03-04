import databaseService from "./databaseServices";

import { ID } from "react-native-appwrite";

// Appwrite database and collection id

const dbId = process.env.EXPO_PUBLIC_APPWRITE_DB_ID;
const colId = process.env.EXPO_PUBLIC_APPWRITE_COL_NOTES_ID;

const noteService = {
    // Get Notes
    async getNotes() {
        const response = await databaseService.listDocuments(dbId, colId);

        if (!Array.isArray(response) && response.error) {
            return { error: response.error };
        }

        return { data: response };
    },

    // Add new Note
    async addNote(text: string) {
        if (!text) {
            return { error: 'Note text canot be empty' }
        }

        const data = {
            text,
            createAt: new Date().toISOString(),
        }

        const response = await databaseService.CreateDocument(
            dbId,
            colId,
            data,
            ID.unique()
        );

        if (response?.error) {
            return {
                error: response.error
            }
        };

        return { data: response }
    },

    // update Document
    async updateNote(id, text: any) {
        const response = await databaseService.updateDocument(dbId, colId, id,
            { text }
        );
        
        if (response?.error) {
            return { error: response.error }
        }

        return { data: response }
    },

    // Delete Node
    async deleteNote(id: string) {
        const response = await databaseService.deleteDocument(dbId, colId, id);

        if (response?.error) {
            return { error: true }
        }

        return { success: true }
    }

}

export default noteService;
