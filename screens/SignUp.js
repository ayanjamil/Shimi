import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  View,
} from "react-native";
import { Icon, Input } from "../components";
import { Block, Text, theme } from "galio-framework";

const { height, width } = Dimensions.get("screen");

import { useNavigation } from "@react-navigation/native";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../config/firebase";
import { doc, setDoc } from "firebase/firestore";

import { AuthContext } from "../context/AuthContext";

const SignUp = (props) => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const { authFinish } = useContext(AuthContext);

  const registerUser = async (userUid) => {
    try {
      const docRef = await setDoc(doc(db, "users", userUid), {
        name: name,
        email: email,
        phone: phone,
      });
      console.log("Document written with ID: ", docRef);
      authFinish(userUid);
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const userUid = user.uid;
      registerUser(userUid);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Block flex style={{ backgroundColor: "white", flex: 1 }}>
      <Text center size={35} bold style={{ marginVertical: 40 }}>
        Sign Up
      </Text>
      <Block flex style={{ flex: 1 }}>
        <Block style={styles.blocks}>
          <Block style={{}}>
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
          </Block>

          <Block style={{}}>
            <Text size={18} color="#888888" style={{ marginHorizontal: 2 }}>
              Email
            </Text>
            <Input
              title="email"
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
          <Block style={{}}>
            <Text size={18} color="#888888" style={{ marginHorizontal: 2 }}>
              Phone
            </Text>
            <Input
              title="phone"
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
          </Block>

          <Block style={{}}>
            <Text size={18} color="#888888" style={{ marginHorizontal: 2 }}>
              Password
            </Text>
            <Input
              title="password"
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
            onPress={() => {
              onHandleSignup();
            }}
          >
            <Text color="white" center bold style={styles.text}>
              Sign Up
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
