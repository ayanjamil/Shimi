import {
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  RefreshControl,
  View,
} from "react-native";


const MasonryList = ({
  products,
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
            {products
              .filter((_, index) => index % numColumns === colIndex)
              .map((product, index) => (
                <ItemComponent product={product} key={index} />
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
