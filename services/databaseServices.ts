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
    }
};

export default databaseService;