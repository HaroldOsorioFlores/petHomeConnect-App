import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";
const styles = StyleSheet.create({
  container_page: {
    flex: 1,
    gap: 20,
    display: "flex",
    padding: 20,
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  text_h1: {
    fontSize: 26,
    alignSelf: "flex-start",
    width: 350,
    borderWidth:3,
    borderColor:"transparent",
    borderBottomColor: "#ebebeb",
    marginBottom:20,
  },
  text_h2: {
    fontSize: 16,
    color: "#989eb1",
  },
  text_registrarse: {
    fontSize: 16,
    color: "#f85f6a",
  },
  space_input:{
    marginBottom:10
  }
});

export default styles;
