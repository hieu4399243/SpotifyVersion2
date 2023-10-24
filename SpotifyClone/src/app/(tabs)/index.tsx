import { StyleSheet, FlatList } from "react-native";
import { Text, View } from "../../components/Themed";
import { tracks } from "../../../assets/data/tracks";
import TrackListItem from "../../components/TrackListItem";
import Player from "../../components/Player";

export default function TabOneScreen() {
  return (
      <FlatList
        data={tracks}
        renderItem={({ item }) => <TrackListItem track ={item}/>
      }
      showsVerticalScrollIndicator={false}
      />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
});
