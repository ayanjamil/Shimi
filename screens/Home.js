import React from "react";
import {
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  Platform,
} from "react-native";
import { Block, Text, theme } from "galio-framework";

import { Input } from "../components";
import MasonryList from "../components/MasonryList";
import { HeaderHeight } from "../constants/utils";
import pins from "../constants/pins";

import { FontAwesome } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;
const loading = false;

class Home extends React.Component {
  render() {
    return (
      <Block flex style={styles.homeContainer}>
        <ScrollView style={{ width, marginTop: "20%" }}>
          <Block flex style={styles.homeTop}>

            {/* shimi logo */}
            <Block middle style={{marginTop:40}}>
              <Image source={require("../assets/imgs/shimi.png")} style={{ marginBottom: 30}} />
            </Block>

            {/* search bar */}
            <Block flex >
              <Input
                placeholder="Search Shimi"
                shadowless
                iconContent={
                  <FontAwesome name="search" size={16} style={{marginRight: 10}} color="grey" />
                }
              />
            </Block>
          </Block>

          {/* masonry layout */}
          <Block flex>
            <MasonryList
              pins={pins}
              refreshing={loading}
            />
          </Block>
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  homeContainer: {
    width: width,
    marginTop: Platform.OS === "android" ? -HeaderHeight : 0,
    // marginBottom: -HeaderHeight * 2,
    flex: 1,
  },
  homeTop: {
    // position: "relative",
    padding: theme.SIZES.BASE,
    // marginHorizontal: theme.SIZES.BASE,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2,
  },
});

export default Home;
