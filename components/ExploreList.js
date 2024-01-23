// explore list, masonry list but uses explore list pins, also width is reduced to make it 3 columns

import {
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  RefreshControl,
  View,
} from "react-native";

import ExplistPin from "../components/ExplistPin";

const ExploreList = ({ pins, refreshing = false, onRefresh = () => {} }) => {
  const width = useWindowDimensions().width;
  const numColumns = Math.ceil(width / 150);

  return (
    <ScrollView
      contentContainerStyle={{ width: "100%" }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.container}>
        {Array.from(Array(numColumns)).map((_, colIndex) => (
          <View style={styles.column} key={`column_${colIndex}`}>
            {pins
              .filter((_, index) => index % numColumns === colIndex)
                    .map((pin) => (
                    <ExplistPin pin={pin} key={pin.id} />
              ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
  },
  column: {
    flex: 1,
  },
});

export default ExploreList;
