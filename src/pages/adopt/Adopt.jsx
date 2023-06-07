import { View, Text, Image } from "react-native";
import styles from "./Adopt.style";
import { Button } from "../../components";
import { useState, useEffect } from "react";
import { petsCollection } from "../../services/firestoreService";
import { db } from "../../services/firebaseConfig";
const Adopt = ({ navigation }) => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      // Llamar a la función de servicio para obtener la colección de mascotas
      const querySnapshot = await petsCollection(db);

      // Obtener los datos de las mascotas de querySnapshot
      const petsData = querySnapshot.docs.map((doc) => doc.data());

      // Actualizar el estado con los datos de las mascotas
      setPets(petsData);
    };

    fetchPets();
  }, []);

  return (
    <>
      <View style={styles.container_page}>
        <Text>Adopt me</Text>
        <Button name="Añade una mascota" nav="AddPet" navigation={navigation} />
        {pets.map((item, index) => (
          <Image key={index} source={{ uri: item.image }} />
        ))}
      </View>
    </>
  );
};

export default Adopt;
