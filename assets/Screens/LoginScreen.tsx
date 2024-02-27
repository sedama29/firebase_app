import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyButton from '../components/MyButton'
import MyTextInput from '../components/MyTextInput'
import SocialMedia from '../components/SocialMedia'

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../background.png")}
        style={styles.imageBackground}
      >
        <Image
          source={require("../food/food.png")}
          style={styles.foodImage}
        />
        <Text style = {styles.title}>Fatmore</Text>
        <View style={styles.inputsContainer}>
          <MyTextInput placeholder="Enter e-mail or Username"/>
          <MyTextInput placeholder="Password" secureTextEntry/>
          <Text style = {styles.textDontHave}>Don't have a Account yet?</Text>
          <MyButton title={"Login"}/>
          <SocialMedia/>
        </View>

      </ImageBackground>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageBackground: {
    height: '100%',
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  foodImage: {
    width: 90,
    height: 50,
    resizeMode: 'stretch',
    position: 'absolute',
    right: 20,
    top: 50,
  },
  title:{
    fontSize:40,
    color:'white',
    marginTop:110,
    fontFamily:"Audiowide-Regular"
  },
  inputsContainer:{
    height:350,
    width:"100%",
    backgroundColor:"white",
    borderRadius:20,
    justifyContent:"center",
    alignItems:"center",
    marginTop:30,
    paddingHorizontal:20,
  },
  textDontHave:{
    alignSelf:"flex-end",
    marginRight:10,
    color:'balck',
    marginBottom:15
  }
})