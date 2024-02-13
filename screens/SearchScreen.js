// screen for search page results
// need to implement this in screens.js, take care of product routing

import { useEffect, useState, useCallback } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ActivityIndicator,
  Alert,
} from "react-native";

// use safe area views in the future for better user experience
// import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import SearchProduct from "../components/SearchProduct";
import SearchRecomCard from "../components/SearchRecomCard";
import MasonryList from "../components/MasonryList";
import mockSearchResult from "../constants/mockSearchResults";
import { generateUniqueImageName } from "../constants/utils";
import { getSearchApiUploadUrl } from "../api/url";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const SearchScreen = (props) => {
  const [uploading, setUploading] = useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const route = useRoute();
  const imageURI = route?.params?.imageURI;
  const navigation = useNavigation();
  useEffect(() => {
    uploadImage(imageURI);
  }, [uploadImage, imageURI]);

  const uploadImage = useCallback(async (uri) => {
    setUploading(true);
    const url = getSearchApiUploadUrl();
    const imageName = generateUniqueImageName();
    const formData = new FormData();
    formData.append("image", {
      uri: uri,
      name: imageName,
      type: "image/jpeg",
    });
    formData.append("type", "search");
    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });
      if (!response) throw "fetch error";

      const searchResultsData = await response.json();
      if (!searchResultsData) throw "search results error";

      if (!!searchResultsData?.response?.visual_matches) {
        const filteredResult =
          searchResultsData?.response?.visual_matches.filter(
            (product) => product.price
          );
        if (!filteredResult) throw "filter array error";
        setSearchResult(filteredResult);
      } else setSearchResult(mockSearchResult);
    } catch (error) {
      //Alert user and go back to home screen
      Alert.alert("Error", error);
      console.log(error);
      navigation.goBack();
    } finally {
      setUploading(false);
    }
  }, []);

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.root}>
      <View style={{ paddingHorizontal: 60, paddingVertical: 20 }}>
        <SearchProduct imageURI={imageURI} />
      </View>

      <View style={styles.exploreMore}>
        <Text style={styles.title} numberOfLines={2}>
          Search results
        </Text>
        {!uploading && searchResult ? (
          <MasonryList
            items={searchResult}
            ItemComponent={SearchRecomCard}
            numColumns={3}
          />
        ) : (
          <ActivityIndicator size="large" color="black" />
        )}
      </View>

      <Pressable onPress={goBack} style={[styles.backBtn, { top: 20 }]}>
        <Ionicons name={"chevron-back"} size={35} color={"black"} />
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  title: {
    margin: 20,
    fontSize: 24,
    fontWeight: "600",
    textAlign: "left",
    lineHeight: 35,
  },
  backBtn: {
    position: "absolute",
    left: 15,
  },
  exploreMore: {
    marginHorizontal: 10,
  },
  title: {
    fontSize: 22,
    lineHeight: 30,
    fontWeight: "600",
    textAlign: "left",
    margin: 10,
  },
  brandContainer: {
    flexDirection: "row",
    padding: 10,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  shopBtn: {
    backgroundColor: "black",
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 50,
  },
});

export default SearchScreen;
