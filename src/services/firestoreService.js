import { ref, uploadBytes } from "firebase/storage";
import { storage } from "./firebaseConfig";
import uuid from 'react-native-uuid';
export const uploadFile = async (file) => {
  const storageRef = ref(storage, uuid.v4());

  // 'file' comes from the Blob or File API
  uploadBytes(storageRef, file).then((snapshot) => {
    console.log("Uploaded a blob or file!");
  });
};
