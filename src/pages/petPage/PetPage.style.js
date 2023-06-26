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
    fontSize: 18,
  },
  container_page_pet: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10
  },
  container_caracteristicas:{
    marginTop: 10,
    width:"100%",
    flex:1,
    gap: 10
  }
});

export default styles;
