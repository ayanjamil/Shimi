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
import { useNavigation } from "@react-navigation/native";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../config/firebase";

const forgotPassword = async (Email) => {
  try {
    await sendPasswordResetEmail(auth, Email);
  } catch (error) {
    console.log(error);
  }
};

const ForgotScreen = (props) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");

  return (
    <Block flex style={{ backgroundColor: "white", flex: 1 }}>
      <Text center size={35} bold style={{ marginVertical: 40 }}>
        Forgot Screen
      </Text>
      <Block flex style={{ flex: 1 }}>
        <Block style={styles.blocks}>
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
        </Block>

        <Block style={styles.buttons}>
          <TouchableOpacity
            style={{
              backgroundColor: "#232323",
              paddingVertical: 15,
              borderRadius: 10,
            }}
            onPress={() => forgotPassword(email)}
          >
            <Text color="white" center bold style={styles.text}>
              Send Email
            </Text>
          </TouchableOpacity>
        </Block>
        <Block
          flex
          center
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            marginBottom: 20,
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
});

export default ForgotScreen;
