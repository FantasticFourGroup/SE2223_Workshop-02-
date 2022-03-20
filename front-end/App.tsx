import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
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
    <View style={styles.container}>
      <StatusBar style="auto" />
      <h1>SHELDON's ENEMY LIST</h1>
      <h4>App version: {version}</h4>
      <PersonList list={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
