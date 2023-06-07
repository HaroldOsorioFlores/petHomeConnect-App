import { View, Text } from "react-native";
import { Input } from "../../components";
import ImagePickerPet from "../../components/imagePicker/ImagePicker";

const data = [{ name: "Ingresa el nombre de la mascota" }];
const AddPet = () => {
  return (
    <>
      {/* <View>
        {data.map((item, index) => (
          <Input name={item.name} />
        ))}
      </View> */}
      <ImagePickerPet />
    </>
  );
};

export default AddPet;
