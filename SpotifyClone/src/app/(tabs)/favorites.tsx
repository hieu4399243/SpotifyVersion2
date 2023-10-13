import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { tracks } from "../../../assets/data/tracks";
import TrackListItem from "../../components/TrackListItem";

export default function Favorites() {
  return (
    <FlatList
        data={tracks}
        renderItem={({ item }) => <TrackListItem track ={item}/>
      }
      showsVerticalScrollIndicator={false}
      />
  )
}

const styles = StyleSheet.create({})