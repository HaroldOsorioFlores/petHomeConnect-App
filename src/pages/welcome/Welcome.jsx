import { View, Text } from "react-native";
import styles from "./Welcome.style";
import * as React from "react";
import { Button } from "../../components";

const data = [
  { route: "Login", name: "Iniciar Sesion" },
  { route: "SignUp", name: "Crear Cuenta" },
]; // Ejemplo de datos con diferentes rutas

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 70, textAlign: "center" }}>PetHome Connect</Text>
      {data.map((item, index) => (
        <Button
          navigation={navigation}
          key={index}
          nav={item.route}
          name={item.name}
        /> // Pasamos el valor del elemento como la propiedad nav
      ))}
    </View>
  );
};

export default Welcome;
