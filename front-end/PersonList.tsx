import React from "react";
import { View } from "react-native";
import Person from "./Person";
import PersonView from "./PersonView";
import { Paragraph, Provider as PaperProvider } from "react-native-paper";

interface PersonListProps {
  list: Person[];
}

export default function PersonList({ list }: PersonListProps) {
  if (list.length < 1) {
    return <></>;
  }

  return (
    <View>
      {list.map((person) => (
        <PersonView person={person} key={person.name} />
      ))}
    </View>
  );
}
