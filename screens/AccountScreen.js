import React, { useState, useEffect } from "react";
import { ActivityIndicator, Button, StyleSheet, Text, View } from "react-native";
import { commonStyles } from "../styles/commonStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const API = "https://melchizedek.pythonanywhere.com";
const API_WHOAMI = "/whoami";

export default function AccountScreen({ navigation }) {
  const [username, setUsername] = useState("");



  useEffect(() => {
    console.log("Setting up nav listener");
    // Check for when we come back to this screen
    const removeListener = navigation.addListener("focus", () => {
      console.log("Running nav listener");
      setUsername(<ActivityIndicator />);
      getUsername();
    });
    getUsername();

    return removeListener;  
  }, []);

  function signOut() {
    AsyncStorage.removeItem("token");
    navigation.navigate("SignIn");
  }

  return (
    <View style={commonStyles.container}>
      <Text>Account Screen</Text>
      <Text>{username}</Text>
      <Button title="Sign out" onPress={signOut} />
    </View>
  );
}

const styles = StyleSheet.create({});
