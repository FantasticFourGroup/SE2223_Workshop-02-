import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import Person from "./Person";
import PersonList from "./PersonList";
import { version } from "./package.json";

const BACK_END_VERSION = version.split(".")[0];

export default function App() {
  const [data, setData] = useState([] as Person[]);

  useEffect(() => {
    fetch(`https://sheldons-list.herokuapp.com/api/v${BACK_END_VERSION}`, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data.sucess);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <PaperProvider>
      <ScrollView>
        <Text style={{ textAlign: "center", marginTop: 30 }}>
          SHELDON's ENEMY LIST
        </Text>
        <Text style={{ textAlign: "center" }}>App version: {version}</Text>
        <PersonList list={data} />
      </ScrollView>
    </PaperProvider>
  );
}
