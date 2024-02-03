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
      // result example
      // assets only contains one image
      // {
      // "assets": [
      //   {
      //     "assetId": null,
      //     "base64": null,
      //     "duration": null,
      //     "exif": null,
      //     "height": 4800,
      //     "rotation": null,
      //     "type": "image",
      //     "uri": "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%username%252Fsticker-smash-47-beta/ImagePicker/77c4e56f-4ccc-4c83-8634-fc376597b6fb.jpeg",
      //     "width": 3200
      //   }
      // ],
      // "canceled": false,
      // "cancelled": false
      // }
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
