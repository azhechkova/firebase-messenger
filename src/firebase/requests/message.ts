import firebase from "firebase/compat";
import { addDoc, collection } from "firebase/firestore";
import { db } from "..";

const sendMessage = async (id: string, message: MessageType) => {
  await addDoc(collection(db, "messages", id, "chat"), message);
};

export default sendMessage;
