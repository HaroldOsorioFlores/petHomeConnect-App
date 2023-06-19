import React from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Input } from "../../components";
import ImagePickerPet from "../../components/imagePicker/ImagePickerPet";
import styles from "./AddPet.style";
import { addPetsCollection } from "../../services/firebaseCollections/firebaseCollectionsPet";
import { useState } from "react";
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
  const changeTextHandle = (text, name) => {
    const newData = data.reduce((obj, item) => {
      return { ...obj, [item.key]: item.key === name ? text : item.description };
    }, {});
    console.log(newData);
  };


  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container_page}>
        <Text style={styles.text_h1}>Añade una mascota</Text>
        <View>
          {data.map((item, index) => (
            <View key={index} style={styles.space_input}>
              <Text>{item.label}</Text>
              <Input name={item.description} changeText={(text)=>{changeTextHandle(text,item.key)}}/>
            </View>
          ))}
        </View>
        <ImagePickerPet />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddPet;
