import { Client, Databases } from "react-native-appwrite";
import { Platform } from "react-native";

const config = {
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    project: process.env.EXPO_PUBLIC_APPWRITE_PROJECT,
    db: process.env.EXPO_PUBLIC_APPWRITE_DB_ID,
    col: {
        notes: process.env.EXPO_PUBLIC_APPWRITE_COL_NOTES_ID,
    }
};

const client = new Client()
    .setEndpoint(config.endpoint)
    .setProject(config.project)

    switch(Platform.OS) {
        case 'ios':
            client.setPlatform(process.env.EXPO_PUBLIC_APPWRITE_BUNDLE_ID)
            break;
        case 'android':
            client.setPlatform(process.env.EXPO_PUBLIC_APPWRITE_PACKAGE_NAME)
            break;
    }

const database = new Databases(client);


export { database, config, client };