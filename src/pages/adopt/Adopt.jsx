import { View, Text } from "react-native";
import styles from "./Adopt.style";
import AddPet from "../addPet/AddPet";
import { Button } from "../../components";

const Adopt = ({ navigation }) => {
  return (
    <>
      <View style={styles.container_page}>
        <Text>Adopt me</Text>
        <Button name="Añade una mascota" nav="AddPet" navigation={navigation} />
      </View>
    </>
  );
};

export default Adopt;
