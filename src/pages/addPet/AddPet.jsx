import { View, Text, ScrollView, SafeAreaView, Image } from "react-native";
import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";

// nosotros
import { uploadFile } from "../../services/firestoreService";
import { Input, Button } from "../../components";
import { addPetsCollection } from "../../services/firebaseCollections/firebaseCollectionsPet";
import styles from "./AddPet.style";

const data = [
  {
    key: "nombre",
    label: "Ingresa el nombre de la mascota: ",
    description: "Ejemplo: Max",
  },
  {
    key: "color",
    label: "Ingresa el color de la mascota: ",
    description: "Ejemplo: Marrón",
  },
  {
    key: "descripcion",
    label: "Ingresa una descripción: ",
    description: "Ejemplo: Perro amigable y juguetón",
  },
  { key: "edad", label: "Ingresa una edad: ", description: "Ejemplo: 2 años" },
  {
    key: "especie",
    label: "Ingresa la especie: ",
    description: "Ejemplo: Perro",
  },
  {
    key: "raza",
    label: "Ingresa una raza: ",
    description: "Ejemplo: Labrador Retriever",
  },
  { key: "sexo", label: "Ingresa el sexo: ", description: "Ejemplo: Macho" },
  {
    key: "tamaño",
    label: "Ingresa un tamaño: ",
    description: "Ejemplo: Mediano",
  },
  {
    key: "ubicacion",
    label: "Ingresa una ubicación: ",
    description: "Ejemplo: Ciudad, Estado",
  },
];

const AddPet = () => {
  const [sendPets, setSendPets] = useState([]);
  const [image, setImage] = useState(null);

  const changeTextHandle = (text, itemKey) => {
    setSendPets((prevSendPets) => {
      const updatedSendPets = { ...prevSendPets };
      updatedSendPets[itemKey] = text;
      return updatedSendPets;
    });
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const handleImageUpload = async () => {
    try {
      const url = await uploadImageFile();
      return url;
    } catch (error) {
      console.error("Error uploading image file:", error);
      throw error;
    }
  };

  const uploadImageFile = async () => {
    try {
      const response = await fetch(image);
      const blob = await response.blob();

      const url = await uploadFile(blob);
      return url;
    } catch (error) {
      throw new Error("Error uploading image file:", error);
    }
  };
  const submitContentAll = async () => {
    try {
      const imageUrl = await handleImageUpload();
      const updatedSendPets = { ...sendPets, imagen: imageUrl };
      addPetsCollection(updatedSendPets);
    } catch (error) {
      // Manejar el error si ocurre
      console.error("Error submitting content:", error);
    }
  };

  console.log(sendPets);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container_page}>
        <Text style={styles.text_h1}>Añade una mascota</Text>
        <View>
          {data.map((item, index) => (
            <View key={index} style={styles.space_input}>
              <Text>{item.label}</Text>
              <Input
                name={item.description}
                changeText={(text) => {
                  changeTextHandle(text, item.key);
                }}
              />
            </View>
          ))}
        </View>
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
              <Image
                source={{ uri: image }}
                style={{ width: 200, height: 200 }}
              />
            )}
          </View>
          <Button name="Subir mascota" handPress={submitContentAll} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddPet;
