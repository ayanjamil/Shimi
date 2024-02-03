import React, { useEffect } from "react";
import { Button, View, SafeAreaView, Pressable } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default ImageUploadComponent = () =>{
  const navigation = useNavigation();

  const goToSearch = (imageURI) => {
    console.log("goToSearch");
    navigation.navigate("SearchScreen", { imageURI });
  };

  // Select image from library or camera
  const selectImage = async () => {
    let result;
    const options = {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    };
    result = await ImagePicker.launchImageLibraryAsync(options);
    if (!result.canceled) {
      goToSearch(result.assets[0].uri);
    }
  };

  return (
    <Pressable
      style={{
        position: "absolute",
        right: 10,
        bottom: 10,
        padding: 10,
        borderRadius: 50,
        paddingRight: 5,
      }}
    >
      <Ionicons
        name="camera-outline"
        size={24}
        color="black"
        onPress={selectImage}
      />
    </Pressable>
  );
}
