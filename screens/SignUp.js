import React from "react";
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

const SignUp = (props) => {
  return (
    <Block flex style={{ backgroundColor: "white", flex: 1 }}>
      <Text center size={35} bold style={{ marginVertical: 40 }}>
        Sign In
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
              Password
            </Text>
            <Input
              title="Full Name"
              placeholder=""
              shadowless
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
            onPress={() => console.log("Create Account Pressed")}
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

export default SignIn;
