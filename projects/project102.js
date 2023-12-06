import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Platform,
  StatusBar,
  ImageBackground,
  Animated,
  Easing,
} from "react-native";
import { useState } from "react";
import { useEffect } from "react";
import React from "react";

export function Clock() {
  const [Time, setTime] = useState(new Date());
  const [MorphAnimation] = useState(new Animated.Value(0));
  const [GlowAnimation] = useState(new Animated.Value(0));

  // useEffect(() => {
  //     setInterval(()=>setTime(new Date()),1000)
  // },[])
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    animateMorphing();
    animateGlowing();
  }, []);

  const animateMorphing = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(MorphAnimation, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(MorphAnimation, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  };
  const animateGlowing = () => {
    Animated.loop(
      Animated.timing(GlowAnimation, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: false,
      })
    ).start();
  };
  const morphStyle = {
    borderRadius: MorphAnimation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 100, 0],
    }),
  };
  const interPolateColors = GlowAnimation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [
      "rgba(255, 0, 0, 1)",
      "rgba(0, 255, 0, 1)",
      "rgba(0, 0, 255, 1)",
    ],
  });

  const animatedStyles = {
    color: interPolateColors,
  };

  // return(
  //     <View style={styles.box}>
  //         <Text style={styles.title}> digital clock</Text>
  //     </View>
  // )

  return (
    <ImageBackground
      source={{
        url: "https://images.pexels.com/photos/7130500/pexels-photo-7130500.jpeg?auto=compress&cs=tinysrgb&w=300",
      }}
      style={{ flex: 1, backgroundColor: "red" }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.header}>NONSO'S CLOCK</Text>
          <View style={styles.innerBackground}>
            <Animated.View style={[styles.clockContainer, morphStyle]}>
              <View style={styles.ClockBackground}>
                <Animated.Text style={[styles.time, animatedStyles]}>
                  {Time.toLocaleTimeString()}
                  <Animated.Text> AM</Animated.Text>
                </Animated.Text>
              </View>
            </Animated.View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: Platform.OS == "andriod" ? StatusBar.currentHeight : null,
  },
  header: {
    textAlign: "center",
    fontSize: 50,
    marginTop: 10,
    fontWeight: "900",
  },
  innerBackground: {
    backgroundColor: "white",
    width: 400,
    height: 450,
    marginTop: 50,
    alignSelf: "center",
    borderRadius: 10,
  },
  clockContainer: {
    backgroundColor: "black",
    width: 350,
    height: 400,
    alignSelf: "center",
    marginTop: 20,
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  time: {
    fontSize: 40,
    textAlign: "center",
    fontWeight: "900",
    color: "white",
  },
});
