import { View, Text, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import styles from "./SignUp.style";
import { Button, Input } from "../../components";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { app } from "../../services/firebaseConfig";

const data = [
  { name: "Email" },
  { name: "Contraseña" },
  { name: "Confirmar contraseña" },
];

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const auth = getAuth(app);

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Las contraseñas no coinciden");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Sign up successful");
        const user = userCredential.user;
        console.log(user);
        navigation.navigate("Login");
      })
      .catch((error) => {
        console.error(error);
      });

    console.log("Email:", email);
    console.log("Contraseña:", password);
  };

  return (
    <View style={styles.container_page}>
      <View style={styles.header}>
        <Text style={styles.text_h1}>Registrarse</Text>
      </View>
      {data.map((item, index) => (
        <Input
          name={item.name}
          key={index}
          changeText={(text) =>
            item.name === "Contraseña"
              ? setPassword(text)
              : item.name === "Confirmar contraseña"
              ? setConfirmPassword(text)
              : setEmail(text)
          }
        />
      ))}
      <View>
        <Text>Estoy de acuerdo en aceptar los</Text>
        <Text style={styles.text_h2_red}>Terminos de Servicios</Text>
        <Text>Y</Text>
        <Text style={styles.text_h2_red}>Politica de Privacidad.</Text>
      </View>
      <Button name="Registrarse" handPress={handleSignUp} />
      <View>
        <Text style={styles.text_h2_black}>¿Tiene una cuenta?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.text_login}>Inicie Sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;
