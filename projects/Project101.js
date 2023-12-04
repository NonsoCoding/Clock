import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Platform,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from "react-native";
import { useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import * as speech from "expo-speech";

export function Dictionary() {
  const [NewWord, setNewWord] = useState(" ");
  const [PasteWord, setPasteWord] = useState(" ");
  const [Definitions, setDefinitions] = useState(" ");

  const SearchedWord = (enteredWord) => {
    setNewWord(enteredWord);
  };

  getInfo = () => {
    var url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + NewWord;

    return fetch(url)
      .then((data) => {
        return data.json();
      })
      .then((response) => {
        var word = response[0].word;
        setPasteWord(word);

        var def = response[0].meanings[0].definitions[0].definition;
        setDefinitions(def);
      });
  };
  const speak = () => {
    speech.speak(PasteWord);
  };
//   const handleDeletedItem = (input) => {
//     const DletedItem = .filter(() => input!= input);
//     setDefinitions(DletedItem);
  //}
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={{
        url: "https://images.pexels.com/photos/1226302/pexels-photo-1226302.jpeg?auto=compress&cs=tinysrgb&w=300",
      }}
    >
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.Text}>Nono's Dictionary</Text>
          <View style={styles.innerBackground}>
            <TextInput
              style={styles.InputField}
              placeholder="Enter your word"
              onChangeText={SearchedWord}
              value={NewWord}
            />
            <View style={styles.buttons}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  getInfo();
                }}
              >
                <Text> ENTER </Text>
              </TouchableOpacity>
              <View>
                <TouchableOpacity>
                  <Text style={styles.btnSecond} >CLEAR</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.outputText}>
              <Text style={styles.Word}>
                {" "}
                WORD:
                <Text style={styles.WordText}>{PasteWord}</Text>
              </Text>
              <View style={styles.Meaning}>
                <Text style={styles.meaningText}> MEANING: {Definitions}</Text>
              </View>

              <View style={styles.MainAudio}>
                <Text style={styles.audio}>Audio:</Text>
                <TouchableOpacity
                  style={styles.icon}
                  onPress={() => {
                    speak();
                  }}
                >
                  <AntDesign name="sound" size="30" color="black" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: Platform.OS == "android" ? StatusBar.currentHeight : null,
  },
  Text: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 20,
    color: "white",
  },
  innerBackground: {
    backgroundColor: "white",
    width: 400,
    height: 600,
    padding: 30,
    alignSelf: "center",
    marginTop: 50,
    borderRadius: 40,
  },
  InputField: {
    borderWidth: 4,
    height: 40,
    borderRadius: 7,
  },
  btn: {
    borderWidth: 2,
    width: 60,
    height: 30,
    marginTop: 10,
    justifyContent: "center",
  },
  outputText: {
    borderWidth: 1,
    height: 300,
    marginTop: 10,
    borderRadius: 10,
  },
  Word: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: "900",
    borderWidth: 2,
    padding: 10,
  },
  Meaning: {
    marginTop: 30,
  },
  meaningText: {
    fontSize: 20,
    fontWeight: "900",
    borderWidth: 2,
  },
  icon: {
    marginTop: 20,
    marginLeft: 20,
  },
  WordText: {
    fontSize: 15,
    fontWeight: "200",
    marginLeft: 20,
  },
  audio: {
    fontSize: 20,
    fontWeight: "900",
    flexDirection: "row",
    marginTop: 18,
  },
  MainAudio: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
  },
  btnSecond: {
    borderWidth: 2,
    padding: 5,
    marginTop: 10,
    marginLeft: 10,
  },
});
