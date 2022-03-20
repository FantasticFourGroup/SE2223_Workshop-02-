import React from "react";
import { View, Text } from "react-native";
import { Paragraph } from "react-native-paper";
import Person from "./Person";

interface PersonProps {
  person: Person;
}

function personView({ person }: PersonProps) {
  return (
    <View
      style={{
        margin: 20,
        alignItems: "center",
        padding: 20,
        borderWidth: 2,
        borderRadius: 30,
      }}
    >
      <Text style={{ color: "red", fontSize: 20 }}>Rank: {person.rank}</Text>
      <Text style={{ fontWeight: "bold", color: "grey" }}>{person.name}</Text>
      <Text>{person.description}</Text>
    </View>
  );
}

export default personView;
