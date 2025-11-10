import {Message} from "@/types/firebase.type";
import {collection, addDoc} from "firebase/firestore";
import {db} from "@/utilities/firebase-config";

export const addFirebase = async ({message}: {message:Message}): Promise<boolean | never > => {
    try {
        
        await addDoc(collection(db, "contact-message"), message);

        return true;

    } catch (error) {
        throw new Error('An error has arisen'+ error);
    }
}
