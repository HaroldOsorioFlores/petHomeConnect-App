import { Text, TouchableOpacity } from "react-native";
import styles from "./Button.style";

const Button = ({ navigation, nav, name, handPress }) => {
  return (
    <TouchableOpacity
      onPress={name === "Ingresar" || name === "Registrarse"  ? handPress : () => navigation.navigate(nav)}
      style={styles.buttonView}
    >
      <Text style={styles.text}> {name} </Text>
    </TouchableOpacity>
  );
};

export default Button;
