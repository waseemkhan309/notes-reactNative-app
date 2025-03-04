import { database } from "./appwrite";

const databaseService = {
    // List Documents
    async listDocuments(dbId: any, colId: any) {
        try {
            const response = await database.listDocuments(dbId, colId);
            return response.documents || [];
        } catch (error) {
            console.error("Error fetching documents:", error.message);
            return { error: error.message };
        }
    },

    // Create Document
    async CreateDocument(dbId: string, colId: string, data: any, id = null) {
        try {
            return await database.createDocument(dbId, colId, id || undefined, data);
        } catch (error) {
            console.error("Error createing document", error.message);
            return { error: error.message };
        }
    },

    // update Document
    async updateDocument(dbId: string, colId: string,id: string, data: any) {
        try {
            return await database.updateDocument(dbId, colId, id, data);
        } catch (error) {
            console.error('Error updating document', error.message);
            return {
                error: error.message,
            }
        }
    },

    // Delete Document
    async deleteDocument(dbId: string, colId: string, id: string) {
        try {
            await database.deleteDocument(dbId, colId, id);
            return { success: true };
        } catch (error) {
            console.error("Error deleting document", error.message);
            return {
                error: error.message,
            }
        }
    }
};

export default databaseService;