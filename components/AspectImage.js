import { ActivityIndicator, Image, StyleSheet } from "react-native";
import { useState, useEffect, useCallback } from "react";

const AspectImage = ({ image }) => {
  const [ratio, setRatio] = useState(1);
  const [imageUri, setImageUri] = useState("");

  const fetchImage = useCallback(async () => {
      setImageUri(image);
  }, [image]);

  useEffect(() => {
    fetchImage();
  }, [fetchImage]);

  useEffect(() => {
    if (imageUri) {
      Image.getSize(imageUri, (width, height) => setRatio(width / height));
    }
  }, [imageUri, setRatio]);

  if (!imageUri) {
    return <ActivityIndicator />;
  }

  return (
    <Image
      source={{
        uri: imageUri,
      }}
      style={[styles.image, { aspectRatio: ratio }]}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    borderRadius: 15,
  },
});

export default AspectImage;
