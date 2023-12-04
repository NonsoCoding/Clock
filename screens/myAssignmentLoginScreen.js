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
  Button,
} from "react-native";

export function assignTodo() {
  console.log(Platform.OS);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://images.pexels.com/photos/5859553/pexels-photo-5859553.jpeg?auto=compress&cs=tinysrgb&w=300",
        }}
        style={styles.container}
      >
        <ScrollView>
          <View style={styles.InsideBackGround}>
            <View>
              <View style={styles.headerTitle}>
                <Image
                  source={require("../TodoApp/assets/favicon.png")}
                  style={styles.ImageHeader}
                />
                <Text style={styles.mainHeader}>SignUp Now</Text>
              </View>
              <Text style={{ color: "white" }}>Happy hallowen</Text>
            </View>
            <View style={styles.background}>
              <View>
                <Text style={styles.Subhead}>
                  Welcome
                  <Text style={{ fontSize: 10, fontStyle: "italic" }}>
                    {" "}
                    fill the following below
                  </Text>
                </Text>
              </View>
              <ImageBackground
                source={{
                  uri: "https://images.pexels.com/photos/619420/pexels-photo-619420.jpeg?auto=compress&cs=tinysrgb&w=300",
                }}
                style={styles.header}
              >
                <Text style={styles.header}>Create an Account</Text>
              </ImageBackground>
              <TextInput
                placeholder="Email/Username"
                style={styles.TextInput}
                placeholderTextColor={"black"}
              />
              <TextInput
                placeholder="FirstName"
                style={styles.TextInput}
                placeholderTextColor={"black"}
              />
              <TextInput
                placeholder="LastName"
                style={styles.TextInput}
                placeholderTextColor={"black"}
              />
              <TextInput
                placeholder="country"
                style={styles.TextInput}
                placeholderTextColor={"black"}
              />
              <TextInput
                placeholder="Mobile"
                style={styles.TextInput}
                placeholderTextColor={"black"}
              />
              <View style={styles.secondButton}>
                <Button
                  title="Create Account"
                  color="black"
                  onPress={() => alert("Account created successfully")}
                ></Button>
              </View>
              <Text style={styles.body}>Already have an Account?</Text>
              <View style={styles.Button}>
                <Button
                  title="login"
                  color="black"
                  onPress={() => alert("hold on a bit")}
                ></Button>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: Platform.OS == "andriod" ? statusbar.currentHeight : null,
    height: null,
    width: null,
    padding: 0,
    justifyContent: "center",
  },
  InsideBackGround: {
    alignItems: "center",
    width: 400,
    marginTop: 35,
    marginLeft: 10,
  },
  body: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 25,
    marginRight: "center",
    marginRight: "center",
    marginTop: 10,
  },
  secondButton: {
    marginTop: null,
    fontWeight: "bold",
    fontStyle: "italic",
    borderRadius: 20,
    height: 40,
  },
  Button: {
    marginBottom: 10,
    fontWeight: "bold",
    fontStyle: "italic",
    borderRadius: 20,
    height: 40,
    fontWeight: "bold",
    marginLeft: 250,
  },
  header: {
    color: "white",
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 5,
    fontSize: 20,
    padding: 4,
    borderRadius: 20,
  },
  mainHeader: {
    fontSize: 40,
    color: "white",
    fontStyle: "italic",
    fontWeight: "bold",
    marginBottom: 0,
    marginTop: 40,
  },
  Subhead: {
    fontSize: 40,
    color: "black",
    fontWeight: "bold",
    marginBottom: 0,
  },
  background: {
    backgroundColor: "white",
    height: 800,
    width: 418,
    borderTopLeftRadius: 70,
    paddingTop: 30,
    alignItems: "center",
    top: 150,
  },
  TextInput: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "white",
    placeholderHorizontal: 20,
    width: 350,
    marginBottom: 20,
    fontStyle: "italic",
  },
  headerTitle: {
    flexDirection: "row",
  },
  ImageHeader: {
    marginTop: 40,
    marginHorizontal: 10,
  },
});
