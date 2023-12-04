import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export function Practice() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
      <Text style={styles.Text}>
        NONSO'S CHESS BOARD
      </Text>
      <FontAwesome5 style={styles.icons}
      name= 'chess-knight'
      color= 'black'
      size= '60'
      />
      </View>
      <View style={styles.mother}>
        <View style={styles.child1}></View>
        <View style={styles.child}></View>
        <View style={styles.child1}></View>
        <View style={styles.child}></View>
        <View style={styles.child1}></View>
        <View style={styles.child}></View>
        <View style={styles.child1}></View>
        <View style={styles.child}></View>
        <View style={styles.child}></View>
        <View style={styles.child1}></View>
        <View style={styles.child}></View>
        <View style={styles.child1}></View>
        <View style={styles.child}></View>
        <View style={styles.child1}></View>
        <View style={styles.child}></View>
        <View style={styles.child1}></View>
        <View style={styles.child1}></View>
        <View style={styles.child}></View>
        <View style={styles.child1}></View>
        <View style={styles.child}></View>
        <View style={styles.child1}></View>
        <View style={styles.child}></View>
        <View style={styles.child1}></View>
        <View style={styles.child}></View>
        <View style={styles.child}></View>
        <View style={styles.child1}></View>
        <View style={styles.child}></View>
        <View style={styles.child1}></View>
        <View style={styles.child}></View>
        <View style={styles.child1}></View>
        <View style={styles.child}></View>
        <View style={styles.child1}></View>
        <View style={styles.child1}></View>
        <View style={styles.child}></View>
        <View style={styles.child1}></View>
        <View style={styles.child}></View>
        <View style={styles.child1}></View>
        <View style={styles.child}></View>
        <View style={styles.child1}></View>
        <View style={styles.child}></View>
        <View style={styles.child}></View>
        <View style={styles.child1}></View>
        <View style={styles.child}></View>
        <View style={styles.child1}></View>
        <View style={styles.child}></View>
        <View style={styles.child1}></View>
        <View style={styles.child}></View>
        <View style={styles.child1}></View>
        <View style={styles.child1}></View>
        <View style={styles.child}></View>
        <View style={styles.child1}></View>
        <View style={styles.child}></View>
        <View style={styles.child1}></View>
        <View style={styles.child}></View>
        <View style={styles.child1}></View>
        <View style={styles.child}></View>
        <View style={styles.child}></View>
        <View style={styles.child1}></View>
        <View style={styles.child}></View>
        <View style={styles.child1}></View>
        <View style={styles.child}></View>
        <View style={styles.child1}></View>
        <View style={styles.child}></View>
        <View style={styles.child1}></View>
      </View>
      <Text>
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    margin: Platform.OS == "android" ? StatusBar.currentHeight : null,
  },
  mother: {
    backgroundColor: "blue",
    width: "100%",
    height: 450,
    padding: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    
  },
  child1:{
    backgroundColor: "white",
    width: 43,
    height: 43,
    margin: 3,
  },
  child:{
    backgroundColor: "black",
    width: 43,
    height: 43,
    margin: 3,
  },
  Text:{
    textAlign: 'center',
    fontSize: 40,
    marginTop: 40,
    fontWeight: '900',
    color: 'white'
  },
  icons:{
    textAlign: 'center',
    marginTop: 10,
    
  }
});
