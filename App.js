import React, { useEffect, useState } from "react";
import {
 StyleSheet,
 Text,
 View,
 TouchableOpacity,
 Dimensions,
 SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
 AntDesign,
 FontAwesome5,
 MaterialCommunityIcons,
} from "@expo/vector-icons";

const CURRENT_WIDTH = Dimensions.get("window").width;

const App = () => {
 const [tab, setTab] = useState(0);
 const [total, setTotal] = useState(0);
 const [count, setCount] = useState(0);
 const [diceResult1, setDiceResult1] = useState(0);
 const [diceResult2, setDiceResult2] = useState(0);

 const startClickHandler = (tab) => {
  setTab(tab);
  setTotal(0);
  setCount(0);
  setDiceResult1(0);
  setDiceResult2(0);
 };

 const gmaeStartHandler = () => {
  setDiceResult1(Math.floor(Math.random() * 6 + 1));
  setDiceResult2(Math.floor(Math.random() * 6 + 1));

  setCount(count + 1);
 };

 useEffect(() => {
  const resultData = diceResult1 + diceResult2;
  setTotal(resultData);
 }, [count]);
 return (
  <View style={styles.container}>
   {tab === 0 && (
    <View style={styles.startView}>
     <TouchableOpacity
      style={styles.startBtn}
      onPressOut={() => startClickHandler(1)}
     >
      <Text style={styles.startBtnText}>GAME START!!</Text>
     </TouchableOpacity>
    </View>
   )}
   {tab === 1 && (
    <View style={styles.container}>
     <View style={styles.top}>
      <View style={styles.leftTop}>
       <View style={styles.leftTopTop}>
        <Text>
         {diceResult1 === 0 ? (
          <FontAwesome5 name="dice" size={100} color="black" />
         ) : diceResult1 === 1 ? (
          <FontAwesome5 name="dice-one" size={100} color="black" />
         ) : diceResult1 === 2 ? (
          <FontAwesome5 name="dice-two" size={100} color="black" />
         ) : diceResult1 === 3 ? (
          <FontAwesome5 name="dice-three" size={100} color="black" />
         ) : diceResult1 === 4 ? (
          <FontAwesome5 name="dice-four" size={100} color="black" />
         ) : diceResult1 === 5 ? (
          <FontAwesome5 name="dice-five" size={100} color="black" />
         ) : (
          diceResult1 === 6 && (
           <FontAwesome5 name="dice-six" size={100} color="black" />
          )
         )}
        </Text>
       </View>
       <View style={styles.leftTopBottom}>
        <Text>
         {diceResult2 === 0 ? (
          <FontAwesome5 name="dice" size={100} color="black" />
         ) : diceResult2 === 1 ? (
          <FontAwesome5 name="dice-one" size={100} color="black" />
         ) : diceResult2 === 2 ? (
          <FontAwesome5 name="dice-two" size={100} color="black" />
         ) : diceResult2 === 3 ? (
          <FontAwesome5 name="dice-three" size={100} color="black" />
         ) : diceResult2 === 4 ? (
          <FontAwesome5 name="dice-four" size={100} color="black" />
         ) : diceResult2 === 5 ? (
          <FontAwesome5 name="dice-five" size={100} color="black" />
         ) : (
          diceResult2 === 6 && (
           <FontAwesome5 name="dice-six" size={100} color="black" />
          )
         )}
        </Text>
       </View>
      </View>
      <View style={styles.leftBottom}>
       <View style={styles.leftBottomLeft}>
        <View style={styles.leftBottomTop}>
         <Text style={styles.leftBottomText}>토탈 점수</Text>
        </View>
        <View style={styles.leftBottomBottom}>
         <Text style={styles.leftBottomText}>굴린 횟수</Text>
        </View>
       </View>
       <View style={styles.leftBottomRigth}>
        <View style={styles.leftBottomTop2}>
         <Text style={styles.leftBottomText}>{total}</Text>
        </View>
        <View style={styles.leftBottomBottom2}>
         <Text style={styles.leftBottomText}>{count}</Text>
        </View>
       </View>
      </View>
     </View>
     <LinearGradient style={styles.left} colors={[`#f6b93b`, `#fad390`]}>
      <TouchableOpacity
       style={styles.startBtn2}
       onPressOut={() => startClickHandler(0)}
      >
       <AntDesign name="home" size={24} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity
       style={styles.startBtn2}
       onPressOut={() => gmaeStartHandler()}
      >
       <AntDesign name="stepbackward" size={24} color="#fff" />
      </TouchableOpacity>
     </LinearGradient>
    </View>
   )}
  </View>
 );
};

const styles = StyleSheet.create({
 container: {
  flex: 1,
  flexDirection: `row`,
  marginTop: 20,
 },
 top: {
  flex: 8,
  justifyContent: `center`,
  alignItems: `center`,
 },
 left: {
  flex: 2,
  alignItems: `center`,
 },
 startView: {
  flex: 1,
  justifyContent: `center`,
  alignItems: `center`,
 },
 startBtn: {
  width: CURRENT_WIDTH / 2,
  height: 45,
  backgroundColor: `#f6b93b`,
  justifyContent: `center`,
  alignItems: `center`,
  borderRadius: 5,
 },
 startBtnText: {
  color: `#fff`,
  fontWeight: `700`,
  fontSize: 20,
 },
 startBtn2: {
  width: 45,
  height: 45,
  borderWidth: 2,
  borderColor: `#fff`,
  justifyContent: `center`,
  alignItems: `center`,
  borderRadius: 5,
  marginTop: 20,
 },
 leftTop: {
  flex: 8,
  width: CURRENT_WIDTH,
  justifyContent: `center`,
  alignItems: `center`,
 },
 leftTopTop: {
  flex: 5,
  justifyContent: `center`,
  alignItems: `center`,
 },
 leftTopBottom: {
  flex: 5,
  justifyContent: `center`,
  alignItems: `center`,
 },
 leftBottom: {
  flex: 2,
  backgroundColor: "#f6b93b",
  // width: CURRENT_WIDTH,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
 },
 leftBottomText: {
  fontSize: 20,
  color: `#fff`,
  margin: 10,
 },
 leftBottomLeft: {
  flex: 3,
  justifyContent: `center`,
  alignItems: `center`,
  borderRightColor: `#fff`,
  borderRightWidth: 3,
  height: `100%`,
 },
 leftBottomRigth: {
  flex: 7,
  justifyContent: `center`,
  alignItems: `flex-start`,
  borderRightColor: `#fff`,
  borderRightWidth: 3,
  height: `100%`,
 },
 leftBottomTop: {
  width: `100%`,
  height: `50%`,
  justifyContent: `center`,
  alignItems: `flex-end`,
  borderBottomWidth: 3,
  borderBottomColor: `#fff`,
 },
 leftBottomBottom: {
  width: `100%`,
  height: `50%`,
  justifyContent: `center`,
  alignItems: `flex-end`,
 },
 leftBottomTop2: {
  width: `100%`,
  height: `50%`,
  justifyContent: `center`,
  alignItems: `flex-start`,
  borderBottomWidth: 3,
  borderBottomColor: `#fff`,
 },
 leftBottomBottom2: {
  width: `100%`,
  height: `50%`,
  justifyContent: `center`,
  alignItems: `flex-start`,
 },
});

export default App;
