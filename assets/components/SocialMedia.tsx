import { Image,StyleSheet, Text, View } from 'react-native'
import React from 'react'

const socialMedia = () => {
  return (
    <View style ={styles.container}>
        <Image 
        source = {require("../SocialMediaIcons/facebook.png")}
        style ={styles.image}/>
        <Image 
        source = {require("../SocialMediaIcons/twitter.png")}
        style ={styles.image2}/>
        <Image 
        source = {require("../SocialMediaIcons/google.png")}
        style ={styles.image}/>
    </View>
  )
}

export default socialMedia

const styles = StyleSheet.create({
    image:{
        height:40,
        width:40,
        marginTop:15
    },
    image2:{
        height:60,
        width:60,
        marginTop:15
    },
    container:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        width:"100%",
    }
})