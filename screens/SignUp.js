import React, { useState } from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  TextInput,
  View,
} from "react-native";
import { Button, Header, Icon, Input, Select, Switch } from "../components";
import { Block, Text, theme } from "galio-framework";
import { argonTheme, tabs } from "../constants";
const { height, width } = Dimensions.get("screen");
import Images from "../constants/Images";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import {
  getAuth,
  createUserWithEmailAndPassword,
  confirmPasswordReset,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import { getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCrcLMbeWfPvHwAfGMtNDM8NonUH5l4yGY",
  authDomain: "shimi-1c1e8.firebaseapp.com",
  projectId: "shimi-1c1e8",
  storageBucket: "shimi-1c1e8.appspot.com",
  messagingSenderId: "904122348831",
  appId: "1:904122348831:web:215dc6b0f0a5104a002c2a",
  measurementId: "G-C56NV5V0ZZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const SignUp = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("shimi@123");
  const handleSignUp = async () => {
    const auth = initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage),
    });
    // use call back
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // async function
        const user = userCredential.user;
        console.log(user.email);
        // ...
      })

      .catch((error) => {
        const errorCode = error.code;

        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ..
      });
    // const user = await createUserWithEmailAndPassword(auth,email,password) \
    //convert to async function  use effect or use callback
  };

  return (
    <Block flex style={{ backgroundColor: "white", flex: 1 }}>
      <Text center size={35} bold style={{ marginVertical: 40 }}>
        Sign
      </Text>
      <Block flex style={{ flex: 1 }}>
        <Block style={styles.blocks}>
          {/* <Block style={{}}>
            <Text size={18} color="#888888" style={{ marginHorizontal: 2 }}>
              Full Name
            </Text>
            <Input
              title="Full Name"
              value={name}
              onChangeText={(name) => setName(name)}
              placeholder=""
              shadowless
              iconContent={
                <Icon
                  size={23}
                  style={{ marginRight: 10 }}
                  color={"#888888"}
                  name="person"
                  family=" Ionicons"
                />
              }
            />
          </Block> */}

          <Block style={{}}>
            <Text size={18} color="#888888" style={{ marginHorizontal: 2 }}>
              Email
            </Text>
            <Input
              title="Full Name"
              placeholder=""
              shadowless
              value={email}
              onChangeText={(email) => setEmail(email)}
              iconContent={
                <Icon
                  size={23}
                  style={{ marginRight: 10 }}
                  color={"#888888"}
                  name="email"
                  family=" Ionicons"
                />
              }
            />
          </Block>
          {/* <Block style={{}}>
            <Text size={18} color="#888888" style={{ marginHorizontal: 2 }}>
              Phone
            </Text>
            <Input
              title="Full Name"
              placeholder=""
              shadowless
              value={phone}
              onChangeText={(phone) => setPhone(phone)}
              iconContent={
                <Icon
                  size={23}
                  style={{ marginRight: 10 }}
                  color={"#888888"}
                  name="phone"
                  family=" Ionicons"
                />
              }
            />
          </Block> */}

          <Block style={{}}>
            <Text size={18} color="#888888" style={{ marginHorizontal: 2 }}>
              Password
            </Text>
            <Input
              title="Full Name"
              placeholder=""
              shadowless
              secureTextEntry={true}
              value={password}
              onChangeText={(password) => setPassword(password)}
              iconContent={
                <Icon
                  size={23}
                  style={{ marginRight: 10 }}
                  color={"#888888"}
                  name="lock"
                  family=" Ionicons"
                />
              }
            />
          </Block>
        </Block>
        <Block style={styles.buttons}>
          <TouchableOpacity
            style={{
              backgroundColor: "#232323",
              paddingVertical: 15,
              borderRadius: 10,
            }}
            onPress={handleSignUp}
          >
            <Text color="white" center bold style={styles.text}>
              Sign In
            </Text>
          </TouchableOpacity>
          <Text
            color="black"
            center
            bold
            style={{
              fontSize: 16,
              marginVertical: 20,
            }}
          >
            Forgot Password?
          </Text>
          <View style={styles.containerDivider}>
            <View style={styles.line} />
            <Text style={styles.textDivider}>OR</Text>
            <View style={styles.line} />
          </View>
          <Block
            style={{
              borderWidth: 2,
              borderColor: "#C0C0C0",
              borderRadius: 10,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#FFFFFF",
                paddingVertical: 15,
                borderRadius: 10,
              }}
              onPress={() => console.log("Sign up with Google Pressed")}
            >
              <Text color="black" center bold style={styles.text}>
                Sign up with Google
              </Text>
            </TouchableOpacity>
          </Block>
        </Block>
      </Block>
      <Block
        flex
        center
        style={{
          flexDirection: "row",
          marginTop: 10,
          alignItems: "flex-end",
          marginVertical: 20,
        }}
      >
        <Text style={{ fontSize: 16 }}>Already have an account?</Text>
        <TouchableOpacity onPress={() => console.log("Button Pressed")}>
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
  blocks: {
    paddingHorizontal: 20,
  },
  buttons: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  text: {
    fontSize: 16,
    padding: 5,
  },
  loginText: {},
  containerDivider: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  line: {
    flex: 1,
    height: 1,
    marginHorizontal: 20,
    backgroundColor: "#ACACAC",
  },
  textDivider: {
    color: "#888888",
    width: 20,
    textAlign: "center",
  },
});

export default SignUp;
