import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
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
  return (
    <ScrollView>
      <View style={styles.container_page}>
        <Text style={styles.text_h1}>Adoptame</Text>

        <View style={styles.containerPets}>
          {allPets.map((item, index) => (
            <TouchableOpacity key={index} onPress={item.imagen}>
              <Image
                source={{ uri: item.imagen }}
                style={{ width: 200, height: 200 }}
              />
            </TouchableOpacity>
          ))}
        </View>
        <Button name="Añade una mascota" nav="AddPet" navigation={navigation} />
      </View>
    </ScrollView>
  );
};

export default Adopt;
