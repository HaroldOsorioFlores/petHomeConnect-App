import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import styles from "./Adopt.style";
import { Button } from "../../components";
import { useState, useEffect } from "react";
import { getPetsCollection } from "../../services/firebaseCollections/firebaseCollectionsPet";

const Adopt = ({ navigation }) => {
  const [allPets, setAllPets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const pets = await getPetsCollection();
      setAllPets(pets);
    };

    fetchData();
  }, []);
  console.log("Todas las mascotas: ", allPets);

  const handleMascota = (
    imagen,
    nombre,
    sexo,
    tamaño,
    ubicacion,
    raza,
    especie,
    edad,
    descripcion,
    color
  ) => {
    console.log("url:", imagen);
    navigation.navigate("PetPage", {
      imagen: imagen,
      nombre: nombre,
      sexo: sexo,
      tamaño: tamaño,
      ubicacion: ubicacion,
      raza: raza,
      especie: especie,
      edad: edad,
      descripcion: descripcion,
      color: color,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container_page}>
        <View style={styles.container_pets}>
          <Text style={styles.text_h1}>Adoptame</Text>
          <View style={styles.containerPets}>
            {allPets.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  handleMascota(
                    item.imagen,
                    item.nombre,
                    item.sexo,
                    item.tamaño,
                    item.ubicacion,
                    item.raza,
                    item.especie,
                    item.edad,
                    item.descripcion,
                    item.color
                  )
                }
              >
                <Image
                  source={{ uri: item.imagen }}
                  style={{ width: 200, height: 200 }}
                />
              </TouchableOpacity>
            ))}
          </View>
          <Button
            name="Añade una mascota"
            nav="AddPet"
            navigation={navigation}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Adopt;
