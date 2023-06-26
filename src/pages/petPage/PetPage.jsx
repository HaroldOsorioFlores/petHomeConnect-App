import React from "react";
import { SafeAreaView, ScrollView, Text, View, Image } from "react-native";
import styles from "./PetPage.style";

const PetPage = ({ route }) => {
  const {
    imagen,
    nombre,
    sexo,
    tamaño,
    ubicacion,
    raza,
    especie,
    edad,
    descripcion,
    color,
  } = route.params;
  console.log(imagen);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container_page}>
        <View style={styles.container_page_pet}>
          <Text style={styles.text_h1}>Soy {nombre} </Text>
          <Image source={{ uri: imagen }} style={{ width: 200, height: 200 }} />
          <View style={styles.container_caracteristicas}>
            <Text style={styles.text_h2}>Mis catacterísticas son...</Text>
            <Text>Sexo: {sexo} </Text>
            <Text>Tamaño: {tamaño} </Text>
            <Text>Ubicacion: {ubicacion} </Text>
            <Text>Raza: {raza} </Text>
            <Text>Especie: {especie} </Text>
            <Text>Edad: {edad} </Text>
            <Text>Descripcion: {descripcion} </Text>
            <Text>Color: {color} </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PetPage;
