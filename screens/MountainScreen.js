import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Linking, ImageBackground} from 'react-native';

export default class ForestScreen extends Component{
  render(){
    return(
      <View style={styles.viewStyle}>
        <ImageBackground source={require('../assets/bgMS.png')} style={styles.bg}>
       <View> <Image  source={require('../assets/black.jpg')} style={styles.iconImage1}/>
       <Text style={styles.text1} onPress={()=>{Linking.openURL('https://www.blackhillsbadlands.com/')}}> Black Hills </Text>
       <Image source={require('../assets/range.jpg')} style={styles.iconImage2}/> 
       <Text style={styles.text2} onPress={()=>{Linking.openURL('https://www.nps.gov/grte/index.htm')}}> Grand Teton Mountain Range </Text>
        <Image source={require('../assets/rain.jpg')} style={styles.iconImage3}/>
        <Text style={styles.text3} onPress={()=>{Linking.openURL('https://www.nps.gov/mora/index.htm')}}> Mount Rainier </Text>
        <Text style={styles.text4}>Click on the text boxes for more information</Text>
        </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    margin: 10,
    width: 200,
    height: 50,
  },
  ratingContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  iconImage1:{
    position:'absolute',
    margin:100,
    borderRadius:80,
    alignItems:'left',
    justifyContent:'space-around',
    margin:100,
    alignSelf: 'left',
    backgroundColor:'#C1ACE9',
    width:400,
    height:300,
    borderRadius:50,
    borderColor:'black',
    borderWidth:5,
  },
  iconImage2:{
    position:'absolute',
    margin:20,
    borderRadius:80,
    alignItems:'center',
    justifyContent:'space-around',
    margin:100,
    alignSelf: 'center',
    backgroundColor:'#C1ACE9',
    width:400,
    height:300,
    borderRadius:50,
    borderColor:'black',
    borderWidth:5
  },
  iconImage3:{
    position:'absolute',
    marginLeft:1025,
    borderRadius:80,
    alignItems:'right',
    justifyContent:'space-around',
    margin:100,
    paddingRight: 200,
    alignSelf: 'right',
    backgroundColor:'#C1ACE9',
    width:400,
    height:300,
    borderRadius:50,
    borderColor:'black',
    borderWidth:5
  },
  text1:{
    color:'black',
    fontSize:25,
    zIndex:1,
    marginTop:235,
    fontFamily:'lobster',
    fontWeight:'bold',
    flex:1,
    flexDirection:'row',
    marginTop:435,
    marginLeft:215,
    backgroundColor:'#C1ACE9',
    width:140,
    borderWidth: 2,
    borderColor: 'black',
  },
  text2:{
    color:'black',
    fontSize:25,
    zIndex:1,
    marginTop:235,
    fontFamily:'lobster',
    fontWeight:'bold',
    flex:1,
    flexDirection:'row',
    marginTop:-30,
    marginLeft:630,
    backgroundColor:'#C1ACE9',
    width:340,
    borderWidth: 2,
    borderColor: 'black',
  },
  text3:{
    color:'black',
    fontSize:25,
    zIndex:1,
    marginTop:235,
    fontFamily:'lobster',
    fontWeight:'bold',
    flex:1,
    flexDirection:'row',
    marginTop:-30,
    marginLeft:1130,
    backgroundColor:'#C1ACE9',
    width:178,
    borderWidth: 2,
    borderColor: 'black',
  },
  text4:{
    color:'black',
    fontSize:25,
    zIndex:1,
    marginTop:500,
    fontFamily:'lobster',
    fontWeight:'bold',
    flex:1,
    flexDirection:'row',
    marginTop:100,
    marginLeft:525,
    backgroundColor:'#C1ACE9',
    width:480,
    borderWidth: 2,
    borderColor: 'black',
  },
  viewStyle:{
    justifyContent:'space-between',
    padding: 5,
    flex:1,
    flexDirection: 'column',
  },
  bg:{
    reSizeMode: 'cover',
    height:'100%',
  },
});