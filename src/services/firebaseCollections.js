import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const petsCollection = async (pets) => {
  try {
    const docRef = await addDoc(collection(db, "petsCollection"), pets);
    console.log("Document written with ID: ", docRef.id);
    const querySnapshot = await getDocs(collection(db, "petsCollection"));
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
