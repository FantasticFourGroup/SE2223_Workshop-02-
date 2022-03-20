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
      <Text style={{ marginTop: 30 }}>SIN:</Text>
      <Text style={{ color: "orange", fontWeight: "900" }}>
        {person.sin.toLocaleUpperCase()}
      </Text>
    </View>
  );
}

export default personView;
