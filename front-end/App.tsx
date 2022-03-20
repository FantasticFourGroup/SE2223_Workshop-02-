import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Person from "./Person";
import PersonList from "./PersonList";

export default function App() {
  const [data, setData] = useState([] as Person[]);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1", {
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
