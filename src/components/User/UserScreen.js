import React from "react";
import {
  Button,
  Modal,
  Center,
  NativeBaseProvider,
  TextArea,
  Image,
  Text,
} from "native-base";
import { View, Dimensions, StyleSheet } from "react-native";
import { useState } from "react";
import Logo from "../../../assets/logo.png";
import BackgroundImage from "../../../assets/background_image.png";
// import { MainContext } from "../../context/MainContext";
// const { user, isLogedIn , setIsLogedIn, profile } = useContext(MainContext);

const windowHeight = Dimensions.get("window").height;

export const Example = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Button onPress={() => setShowModal(true)}>User Screen</Button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content
          style={styles.main}
          height={"85%"}
          maxHeight={windowHeight}
        >
          <Modal.CloseButton />
          <Modal.Header style={styles.main}>
            <Center style={styles.container}>
              <Image
                size={90}
                resizeMode={"contain"}
                borderRadius={100}
                source={{
                  uri: Logo,
                }}
                alt="Alternate Text"
              />

              <Image
                size={90}
                resizeMode={"contain"}
                borderRadius={100}
                source={{
                  uri: "https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-shopping-cart-interface-kiranshastry-gradient-kiranshastry.png",
                }}
                alt="Alternate Text"
              />
            </Center>
          </Modal.Header>
          <Modal.Body style={styles.main}>
            <Center style={styles.main}>
              <Image
                source={{
                  uri: BackgroundImage,
                }}
                alt="Alternate Text"
                size="xl"
                w="100%"
                h="200"
              />
            </Center>
            <View style={styles.textArea}>
              <Image
                size={90}
                resizeMode={"contain"}
                borderRadius={360}
                source={{
                  uri: "https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=862&q=80",
                }}
                alt="Alternate Text"
              />
              <View style={styles.textAreaTwo}>
                <TextArea h={10} placeholder="Name" w="200" maxW="300" />
                <TextArea h={10} placeholder="E-Mail" w="200" maxW="300" />
                <TextArea h={10} placeholder="Passwort" w="200" maxW="300" />
              </View>
            </View>
          </Modal.Body>
          <Modal.Footer style={styles.footer}>
            <Button.Group variant="ghost" space={2}>
              <Button>
                <Text style={styles.footerText}>Login</Text>
              </Button>
              <Button
                onPress={() => {
                  setShowModal(false);
                }}
              >
                <Text style={styles.footerText}>Sign In</Text>
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Example />
      </Center>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#dbdbdb",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#dbdbdb",
  },
  textArea: {
    flexDirection: "row",
    marginTop: "20px",
    backgroundColor: "#dbdbdb",
  },
  textAreaTwo: {
    marginLeft: "20px",
    backgroundColor: "#dbdbdb",
  },
  footer: {
    backgroundColor: "#154966",
    flexDirection: "row",
    justifyContent: "flex-start",
    borderRadius: "35px",
  },
  footerText: {
    marginTop: "20px",
    color: "white",
    fontWeight: "bold",
    fontSize: "20px",
    height: "50px",
  },
});
