import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";
const styles = StyleSheet.create({
  container_page: {
    flex: 1,
    display: "flex",
    paddingHorizontal: 20,
    marginTop: 40,
  },
  text_h1: {
    fontSize: 26,
    alignSelf: "flex-start",
    width: 350,
    borderWidth: 3,
    borderColor: "transparent",
    borderBottomColor: "#ebebeb",
  },
  text_h2: {
    fontSize: 16,
    color: "#989eb1",
  },
  text_registrarse: {
    fontSize: 16,
    color: "#f85f6a",
  },
  containerPets: {
    display: "flex",
    gap: 20,
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  container_pets:{
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap:20,
  }
});

export default styles;
