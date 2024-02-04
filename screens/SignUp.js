import React, { useState } from "react";
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
import { collection, addDoc } from "firebase/firestore";

const SignUp = (props) => {
  const navigation = useNavigation();
  const [name, setName] = useState("ayan");
  const [email, setEmail] = useState("ayanjamil00@gmail.com");
  const [phone, setPhone] = useState("9934719916");
  const [password, setPassword] = useState("ayan@123");

  const addDataToDatabase = async () => {
    console.log("addDataToDatabase called");
    const userCollection = collection(db, "users");
    try {
      const docRef = await addDoc(userCollection, {
        first: "Ada",
        last: "Lovelace",
        born: 1815,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
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
      // const userRef = doc(database, "users", user.uid);
      // await setDoc(userRef, {
      //   displayName: name,
      //   email: email,
      //   uid: user.uid,
      //   photoURL: imageURL || profile,
      //   phoneNumber: "",
      // });
      //  adding phonenumber and name to database(would have to enable firestore)
      console.log(user.email);
      navigation.navigate("App");
      //can use State Management to make it better
    } catch (error) {
      Alert.alert(error.message);
      console.log(Alert.alert(error.message));
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
          <Block style={{}}>
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
          </Block>

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
            onPress={onHandleSignup}
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
              onPress={() => addDataToDatabase()}
            >
              <Text color="black" center bold style={styles.text}>
                Sign up with Google
              </Text>
            </TouchableOpacity>
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
