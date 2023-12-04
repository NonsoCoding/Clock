// import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  SafeAreaView,
  ScrollView,
  Image,
  ImageBackground,
  TextInput,
} from "react-native";

export default function App() {
  console.log(Platform.OS);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>MY CV I NEED THIS JOB</Text>
          {/* <Image source={require("./assets/icon.png")} style={{ width: '100%', height: 350 }} /> */}
          <Image
            source={{
              uri: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600",
            }}
            style={{ width: "100%", height: 350 }}
          />
          <ImageBackground
            source={{
              url: "https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=600",
            }}
            style={styles.bg}
            borderRadius={20}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              MY FIRST BACKGROUND IMAGE
            </Text>
            <TextInput
              placeholder="Enter your name"
              style={{ borderWidth: 1, padding: 10, borderRadius: 10 }}
              placeholderTextColor={"green"}
            />
          </ImageBackground>
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 33,
    margin: Platform.OS == "andriod" ? statusbar.currentHeight : null,
    backgroundColor: "lightyellow",
    // alignItems: 'center',
    //justifyContent: 'center',
  },
  // boldText: {
  // fontWeight: 'bold'
  // }
  header: {
    fontSize: 15,
    color: "red",
    borderColor: "green",
    borderWidth: 5,
    borderRadius: 20,
    padding: 3,
    textAlign: "center",
    fontWeight: "bold",
  },
  bg: {
    width: "100%",
    height: 580,
    marginTop: 20,
    justifyContent: "center",
  },
});
