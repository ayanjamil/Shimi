import React from "react";
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

import "expo-dev-client";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { GoogleSignin } from "@react-native-google-signin/google-signin";

import auth from "@react-native-firebase/auth";
// import { GoogleSignin } from "@react-native-google-signin/google-signin";

const Onboarding = (props) => {
  const navigation = useNavigation();

  // const auth = getAuth();
  // GoogleSignin.configure({
  //   webClientId:
  //     "904122348831-nr8akrbkhq4skln41ulo7jlmik52aesh.apps.googleusercontent.com",
  // });
  // async function onGoogleButtonPress() {
  //   // Check if your device supports Google Play
  //   await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  //   // Get the users ID token
  //   const { idToken } = await GoogleSignin.signIn();

  //   // Create a Google credential with the token
  //   const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  //   // Sign-in the user with the credential
  //   return auth().signInWithCredential(googleCredential);
  // }

  const handleAuth = async () => {
    const provider = new GoogleAuthProvider();
    try {
      console.log("entered try block");
      const result = await signInWithPopup(auth, provider);
      if (result) {
        const user = result.user;
        const credential = provider.credentialFromResult(auth, result);
        const token = credential.accessToken;
      }
      navigation.navigate("App");
    } catch (error) {
      console.log(error);
    }
  };

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

          <TouchableOpacity
            style={{
              backgroundColor: "#5190E8",
              paddingVertical: 10,

              borderRadius: 25,
            }}
            onPress={() => onGoogleButtonPress()}
          >
            <Text center bold style={styles.text}>
              Continue with Google
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
