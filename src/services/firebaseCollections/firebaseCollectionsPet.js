import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

export const addPetsCollection = async (pets) => {
  try {
    const docRef = await addDoc(collection(db, "petsCollection"), pets);
    console.log("Document written with ID: ", docRef);
    return docRef;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getPetsCollection = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "petsCollection"));
    const pets = [];
    querySnapshot.forEach((doc) => {
      pets.push(doc.data());
    });
    console.log("Coleccion obtenida: ", pets);
    return pets;
  } catch (error) {
    console.log(error);
  }
};


export const getPetsCollectionById = async (id) => {
  try {
    const q = query(collection(db, "petsCollection"), where("id", "==", id));
    const querySnapshot = await getDocs(q);
    console.log("Documento obtenido por ID: ", querySnapshot);
    return querySnapshot;
  } catch (error) {
    console.log(error);
  }
};

export const deletePetsCollectionById = async (id) => {
  try {
    const docRef = doc(db, "petsCollection", id);
    const deletedDoc = await deleteDoc(docRef);
    console.log("Documento eliminado: ", deletedDoc);
    return deletedDoc;
  } catch (error) {
    console.log(error);
  }
};

export const updatePetsCollectionById = async (id, newData) => {
  try {
    const docRef = doc(db, "petsCollection", id);
    const updatedDoc = await updateDoc(docRef, newData);
    console.log("Documento actualizado: ", updatedDoc);
    return updatedDoc;
  } catch (error) {
    console.log(error);
  }
};
