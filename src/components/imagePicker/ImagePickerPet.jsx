import React, { useState, useEffect } from "react";
import { Image, View, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";

// nosotros
import { uploadFile } from "../../services/firestoreService";
import Button from "../button/Button";
import styles from "./ImagePickerPet.style";
// REAPASAR
const ImagePickerPet = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);
    if (!result.cancelled) {
      setImage(result.uri);
      // Call uploadImageFile with the updated image URI
    }
  };
  // REAPASAR
  const uploadImageFile = async () => {
    try {
      const response = await fetch(image);
      const blob = await response.blob();

      // Pass the blob to the uploadFile function
      uploadFile(blob);
    } catch (error) {
      console.error("Error uploading image file:", error);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
      }}
    >
      <Button name="Selecciona una imagen" handPress={pickImage} />
      <View style={styles.box_image}>
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}
      </View>
      <Button name="Subir imagen" handPress={uploadImageFile} />
    </View>
  );
};

export default ImagePickerPet;
