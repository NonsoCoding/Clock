import { useState } from "react";
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
  TouchableOpacity,
  FlatListComponent,
  FlatList,
} from "react-native";

export function TodoApp() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const handleAddTodo = () => {
    setList([...list, { id: Date.now().toString(), title: text }]);
  };
  const renderTodos = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: "blue",
          borderRadius: 10,
          paddingVertical: 12,
          marginTop: null,
          marginBottom: 20,
          paddingHorizontal: 6,
          paddingVertical: 20,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "800",
            color: "#fff",
            marginLeft: 12,
          }}
        >
          {item.title}
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={{ textAlign: "center", fontSize: 40, fontWeight: "bold" }}>
          TODO APP
        </Text>
        <View style={{}}></View>
        <TextInput
          placeholder="Enter your text"
          style={{
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
            fontSize: 16,
            marginTop: 20,
          }}
          placeholderTextColor={"black"}
          value={text}
          onChangeText={(text) => setText(text)}
        />

        <Text>{text}</Text>
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            borderRadius: 40,
            paddingVertical: 20,
            marginVertical: 24,
            alignItems: "center",
          }}
          onPress={() => handleAddTodo()}
        >
          <Text
            style={{ fontSize: "bold", color: "white", fontWeight: "bold" }}
          >
            {" "}
            CLICK HERE{" "}
          </Text>
        </TouchableOpacity>

        <FlatList data={list} renderItem={renderTodos} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 33,
    margin: Platform.OS == "andriod" ? statusbar.currentHeight : null,
    backgroundColor: "white",
  },
});
