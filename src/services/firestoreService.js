import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebaseConfig";
import uuid from "react-native-uuid";
export const uploadFile = async (file) => {
  const storageRef = ref(storage, uuid.v4());

  // 'file' comes from the Blob or File API
  await uploadBytes(storageRef, file).then((snapshot) => {
    console.log("Uploaded a blob or file!");
  });

  const url = await getDownloadURL(storageRef);
  console.log(url);
  return url;
};

