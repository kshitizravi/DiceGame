import React from "react";
import {View,Text,StyleSheet,Image,TouchableOpacity,Alert} from "react-native";

export default class App extends React.Component{
  myButton = ()=>{
    var numBer1 = this.getRandomNumber1();
    var numBer2 = this.getRandomNumber2();
    switch (numBer1)
    {
      case 1:
        this.setState({
          uri:require('./assets/dice1.png')})
          break;
      case 2:
        this.setState({
          uri:require('./assets/dice2.png')})
          break;
      case 3:
        this.setState({
          uri:require('./assets/dice3.png')})
          break;
      case 4:
        this.setState({
          uri:require('./assets/dice4.png')})
          break;
      case 5:
        this.setState({
          uri:require('./assets/dice5.png')})
          break;
      case 6:
        this.setState({
          uri:require('./assets/dice6.png')})
          break;
      default:
        Alert.alert("hello");
    }
    switch (numBer2)
    {
      case 1:
        this.setState({
          uri2:require('./assets/dice1.png')})
          break;
      case 2:
        this.setState({
          uri2:require('./assets/dice2.png')})
          break;
      case 3:
        this.setState({
          uri2:require('./assets/dice3.png')})
          break;
      case 4:
        this.setState({
          uri2:require('./assets/dice4.png')})
          break;
      case 5:
        this.setState({
          uri2:require('./assets/dice5.png')})
          break;
      case 6:
        this.setState({
          uri2:require('./assets/dice6.png')})
          break;
      default:
        Alert.alert("hello");
      }

    if(numBer1>numBer2){
      this.setState({
      text:"Player 1 Wins!"})
      }
    else if(numBer1<numBer2){
      this.setState({
      text:"Player 2 Wins!"})
      }
    else{
      this.setState({
      text:"It's a Tie!"})
      }
  }
  
  getRandomNumber1= ()=>{
    return Math.floor(Math.random()*6)+1;

   }
   getRandomNumber2= ()=>{
    return Math.floor(Math.random()*6)+1;

   }
  constructor(props){
    super(props);
    this.state =
    {
                uri:require('./assets/dice1.png'),
                uri2:require('./assets/dice1.png'),
                text:""
    }
    };

   

  render(){

    return( 
    <View style={styles.container}>
      <Image source={this.state.uri}/>
      <Image source={this.state.uri2}/>
      <TouchableOpacity
        onPress={this.myButton}
      >
      <Text style={styles.button}>Play Game !</Text>
     </TouchableOpacity>
      <Text style={styles.message}>{this.state.text}</Text>
    </View>
    );
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    fontSize:60,
    backgroundColor:"#ffc1fa"
  },
  button:{
    fontSize:30,
    marginTop:20,
    color:"#fffafa",
    fontWeight:"bold",
    borderWidth:2,
    padding:20,
    borderRadius:10

  },
  message:{
    fontSize:15,
    marginBottom:5,
    color:"#000000"

  }
})
