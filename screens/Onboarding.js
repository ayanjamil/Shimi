import React, { useContext } from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Block, Button, Text, theme } from "galio-framework";
const { height, width } = Dimensions.get("screen");
import Images from "../constants/Images";
import { useNavigation } from "@react-navigation/native";
const Onboarding = (props) => {
  const navigation = useNavigation();
  return (
    <Block flex style={styles.container}>
      <Block flex center>
        <ImageBackground
          source={Images.Onboarding}
          style={{ height, width, zIndex: 1, opacity: 0.25 }}
        />
      </Block>
      <Block flex style={{ flex: 6 }}>
        <TouchableOpacity onPress={() => navigation.navigate("App")}>
          <Block center>
            <Image source={Images.LogoOnboarding} style={styles.logo} />
          </Block>
        </TouchableOpacity>
        <Block style={{ marginVertical: 50 }}>
          <Text
            center
            bold
            color="black"
            size={45}
            style={{
              marginVertical: 10,
              textShadowColor: "rgba(0, 0, 0, 0.20)",
              textShadowOffset: { width: -1, height: 4 },
              textShadowRadius: 5,
            }}
          >
            {"Your Fashion Moodboard "}
          </Text>
          <Text
            center
            bold
            size={18}
            style={{
              color: "#6B6B6B",
              textShadowColor: "rgba(0, 0, 0, 0.20)",
              textShadowOffset: { width: -1, height: 4 },
              textShadowRadius: 5,
            }}
          >
            {"Be Inspired"}
          </Text>
        </Block>
        <Block
          flex
          style={{
            marginBottom: 60,
            flex: 4.5,
            marginHorizontal: 30,
            marginBottom: 60,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#000",
              paddingVertical: 10,
              marginVertical: 15,
              paddingHorizontal: 20,
              borderRadius: 25,
            }}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text center bold style={styles.text}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </Block>
        <Block flex center style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 16 }}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
            <Text
              center
              style={{
                color: "blue",
                alignSelf: "center",
                marginHorizontal: 5,
                fontSize: 16,
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </Block>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.WHITE,
    padding: 5,
  },

  logo: {
    width: 130,
    height: 43,
    marginVertical: 20,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    padding: 5,
  },
  loginText: {},
});

export default Onboarding;
