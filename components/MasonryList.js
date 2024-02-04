import {
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  RefreshControl,
  View,
} from "react-native";


const MasonryList = ({
  items,
  refreshing = false,
  ItemComponent,
  numColumns = 2,
  onRefresh = () => {},
}) => {
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
            {items
              .filter((_, index) => index % numColumns === colIndex)
              .map((item, index) => (
                <ItemComponent product={item} key={index} />
              ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 12,
    flexDirection: "row",
  },
  column: {
    flex: 1,
  },
});

export default MasonryList;
