import { Button, StyleSheet, View, Image, TextInput, Text } from "react-native";
import React, { useContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MainContext } from "../../context/MainContext";
import axios from "axios";
import Logo from "../../../assets/logo.png";
import Background from "../../../assets/background_image.png";

const UserProfile = () => {
  const navigation = useNavigation();
  const { user, isLogedIn, setIsLogedIn, profile } = useContext(MainContext);

  //   useEffect(() => {
  //     if (isLogedIn) {
  //         console.log("use efect Login isLogedIn");
  //         console.log(user);
  //         console.log(profile);
  //     }
  //     console.log(isLogedIn);
  // }, [isLogedIn, setIsLogedIn]);

  const logout = async () => {
    try {
      let config = {
        header: { "content-type": "aplication/json" },
      };
      const data = await axios.get(
        "https://ulearning-backend.vercel.app/logout",
        config
      );

      setIsLogedIn(false);

      navigation.navigate("Home");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={Logo} style={styles.logo} alt="Logo" />
          <Image
            source={{
              uri: "https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-shopping-cart-interface-kiranshastry-gradient-kiranshastry.png",
            }}
            style={styles.logo}
          />
        </View>

        <Image source={Background} style={styles.background} alt="Background" />

        <View style={styles.body}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=862&q=80",
            }}
            style={styles.profile}
          />
          <View style={styles.textInput}>
            <TextInput
              style={styles.input}
              placeholder="Name"
              keyboardType="default"
            />
            <TextInput
              style={styles.input}
              placeholder="E-Mail"
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              keyboardType="default"
            />
          </View>
        </View>

        <View style={styles.bottomView}>
          <Button onPress={() => navigation.navigate("Login")} title="Login" />
          <Button
            onPress={() => navigation.navigate("Signin")}
            title="Sign In"
          />
          <Button onPress={() => navigation.navigate("Home")} title="Home" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomView: {
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  logo: {
    width: 100,
    height: 100,
  },
  background: {
    width: "100%",
    height: 200,
    marginTop: 20,
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 360,
    marginTop: 40,
  },
  body: {
    flexDirection: "row",
    marginTop: 30,
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  textInput: {
    flexDirection: "column",
  },
});
