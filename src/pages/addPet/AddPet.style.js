import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";
const styles = StyleSheet.create({
  container_page: {
    flex: 1,
    gap: 20,
    display: "flex",
    paddingHorizontal: 20,
    marginTop: 40
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
  },
  box_image: {
    width: 200,
    height: 200,
    borderColor: "black",
    borderWidth: 1
  },
});

export default styles;
