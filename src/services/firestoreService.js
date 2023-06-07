import { collection, addDoc } from "firebase/firestore";

export const petsCollection = async (pets) => {
  try {
    const docRef = await addDoc(collection(db, "pets"), pets);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
