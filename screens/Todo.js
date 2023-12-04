import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  SafeAreaView,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
// import AntDesign from "react-native-vector-icons/AntDesign";
import AntDesign from "react-native-vector-icons/AntDesign";

export function TodoApp() {
  const [text, setText] = useState(" ");
  const [list, setList] = useState([]);
  // console.log(list);
  //setText("thiss")

  function AddItem() {
    setList((pre) => [...pre, { text: text, date: new Date().getTime() }]);
    Alert.alert("add Item", "item has been added successfully", [
      { text: "Done", onPress: () => console.log("you saved your todo") },
    ]);
  }
  const handleDeleteItem = (input) => {
    const updatedList = list.filter((item) => item.date != input);
    setList(updatedList);
    Alert.alert("todo has been deleted");
  };

  return (
    <ImageBackground
      source={{
        url: "https://images.pexels.com/photos/326347/pexels-photo-326347.jpeg?auto=compress&cs=tinysrgb&w=600",
      }}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>
          Todo List Display
        </Text>
        <ScrollView>
          <AntDesign
            style={{ textAlign: "center", marginTop: 20 }}
            name="apple1"
            size="40"
            color="black"
          />
          <View style={styles.innerBackground}>
            <TextInput
              placeholder="Enter your name"
              style={styles.input}
              placeholderTextColor={"black"}
              onChangeText={(inp) => {
                setText(inp);
              }}
            />
            {/* <Text>{text}</Text> */}
            {/*<Button title='Add To List' />*/}
            <TouchableOpacity
              onPress={AddItem}
              style={{
                backgroundColor: "green",
                borderRadius: 40,
                padding: 10,
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Add To List
              </Text>
            </TouchableOpacity>

            {/*{
          list.map(item=>{
            return <Text key={item.date}>{item.text}
            </Text>
          })
        }*/}
            <FlatList
              style={{ flex: 1, marginTop: 20 }}
              data={list}
              renderItem={({ item }) => {
                return (
                  <View style={styles.renderView}>
                    <Text>{item.text}</Text>
                    <View style={styles.row}>
                      <Text>30/11/23</Text>
                      <TouchableOpacity
                        onPress={() => handleDeleteItem(item.date)}
                        style={styles.btn}
                      >
                        <AntDesign name="delete" color="black" size="30" />
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              }}
              key={(item) => item.date}
            />
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    margin: Platform.OS == "andriod" ? statusbar.currentHeight : null,
    backgroundColor: "",
    marginTop: 50,
  },
  header: {
    fontSize: 25,
    color: "green",
    textAlign: "center",
  },
  input: {
    borderWidth: 5,
    padding: 10,
    borderRadius: 10,
    fontSize: 16,
    marginTop: 20,
  },
  renderView: {
    borderColor: "black",
    padding: 10,
    borderRadius: 10,
    borderWidth: 3,
    marginTop: 5,
    backgroundColor: "green",
  },
  btn: {
    backgroundColor: "white",
    padding: 4,
    borderRadius: 15,
    paddingHorizontal: 13,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  innerBackground: {
    backgroundColor: "white",
    padding: 10,
    height: 700,
    borderRadius: 20,
    marginTop: 30,
    shadowColor: "black",
    elevation: 25,
  },
});
