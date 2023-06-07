import React from "react";
import { Button, View } from "react-native";
import { storage } from "@react-native-firebase/storage";
import firestore from "@react-native-firebase/firestore";

export default function ImagePickerPet() {
  const handleImageUpload = async () => {
    // Obtener referencia a Firebase Storage
    const storageRef = storage().ref("images");

    // Ruta de la imagen en Firebase Storage
    const imagePath = "images/dobermanReact.avif";

    try {
      // Subir imagen a Firebase Storage
      await storageRef.child(imagePath).putFile(localImagePath);

      // Obtener URL de descarga pública de la imagen
      const downloadURL = await storageRef.child(imagePath).getDownloadURL();

      // Guardar la URL en Firestore
      const mascotaRef = firestore()
        .collection("mascotas")
        .doc("ID_DE_LA_MASCOTA");
      await mascotaRef.update({
        imagen: downloadURL,
      });

      console.log("URL de imagen guardada en Firestore correctamente");
    } catch (error) {
      console.error(
        "Error al subir la imagen o guardar la URL en Firestore:",
        error
      );
    }
  };

  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Button title="Subir imagen" onPress={handleImageUpload} />
    </View>
  );
}
