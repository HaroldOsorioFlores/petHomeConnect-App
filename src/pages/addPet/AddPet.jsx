import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Input } from "../../components";
import ImagePickerPet from "../../components/imagePicker/ImagePickerPet";
import styles from "./AddPet.style";
const data = [
  {
    key: "name",
    label: "Ingresa el nombre de la mascota: ",
    description: "Ejemplo: Max",
  },
  {
    key: "color",
    label: "Ingresa el color de la mascota: ",
    description: "Ejemplo: Marrón",
  },
  {
    key: "description",
    label: "Ingresa una descripción: ",
    description: "Ejemplo: Perro amigable y juguetón",
  },
  { key: "age", label: "Ingresa una edad: ", description: "Ejemplo: 2 años" },
  {
    key: "species",
    label: "Ingresa la especie: ",
    description: "Ejemplo: Perro",
  },
  {
    key: "breed",
    label: "Ingresa una raza: ",
    description: "Ejemplo: Labrador Retriever",
  },
  { key: "sex", label: "Ingresa el sexo: ", description: "Ejemplo: Macho" },
  {
    key: "size",
    label: "Ingresa un tamaño: ",
    description: "Ejemplo: Mediano",
  },
  {
    key: "location",
    label: "Ingresa una ubicación: ",
    description: "Ejemplo: Ciudad, Estado",
  },
];

const AddPet = () => {
  return (
    <ScrollView>
      <View style={styles.container_page}>
        <Text style={styles.text_h1}>Añade una mascota</Text>

        <View>
          {data.map((item, index) => (
            <View key={index} style={styles.space_input}>
              <Text>{item.label}</Text>
              <Input name={item.description} />
            </View>
          ))}
        </View>
        <ImagePickerPet />
      </View>
    </ScrollView>
  );
};

export default AddPet;
