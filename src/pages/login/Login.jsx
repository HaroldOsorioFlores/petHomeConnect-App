import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import styles from "./Login.style";
import { Button, Input } from "../../components";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../services/firebaseConfig";

const data = [{ name: "Email" }, { name: "Contraseña" }];
const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(app);

  const changeTextHandle = (text, name) => {
    if (name === "Email") {
      setEmail(text);
    } else if (name === "Contraseña") {
      setPassword(text);
    }
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Login successful");
        const user = userCredential.user;
        console.log(user);
        navigation.navigate("Adopt");
      })
      .catch((error) => {
        console.error(error);
      });

    console.log("Email:", email);
    console.log("Contraseña:", password);
  };

  //firebase

  return (
    <View style={styles.container_page}>
      <View style={styles.header}>
        <Image
          source={require("../../../assets/images/loginMascota.png")}
          style={styles.image_login}
        />
        <Text style={styles.text_h2}>PetHome Connect</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.text_h1}>Iniciar Sesión</Text>
        <Text style={styles.text_h2}>¡Hola, bienvenido!</Text>
        {data.map((item, index) => (
          <Input
            name={item.name}
            key={index}
            changeText={(text) => changeTextHandle(text, item.name)}
          />
        ))}
        <Button name="Ingresar" handPress={handleLogin} />
        {/* <Button title="Ingresar" onPress={handleLogin} /> */}
      </View>
      <Text style={styles.text_h2}>Ó</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SignUp");
        }}
      >
        <Text style={styles.text_registrarse}>Registrate</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Login;
