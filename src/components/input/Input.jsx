import styles from "./input.style";
import { TextInput } from "react-native";

const Input = ({ name, changeText }) => {
  return (
    <>
      <TextInput
        placeholder={name}
        style={styles.input}
        placeholderTextColor="#f85f6a"
        onChangeText={(text) => changeText(text)}
        secureTextEntry={
          name === "Contraseña" || name === "Confirmar contraseña"
        } // Establece secureTextEntry según el nombre
      />
    </>
  );
};
export default Input;
