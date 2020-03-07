import React, { Component,useState,useEffect } from 'react';
import { TouchableHighlight,Modal,StatusBar,TouchableOpacity, StyleSheet, Text, View, Button, TouchableWithoutFeedback } from 'react-native';

var turn = 0;
var options = ['0','0','0','0','0','0','0','0','0'];

function isGameDrawen(){
  for ( let i = 0; i < 12 ; i++ ) {
    if (options[i]=='0'){
      return false;
    }
  }
  return true;
}
function checkWin(){

  if (options[0] == 'g' && options[1] == 'g' && options[2] == 'g'){
    return 1;
  }
  else if (options[3] == 'g' && options[4] == 'g' && options[5] == 'g'){
    return 1;
  }
  else if (options[6] == 'g' && options[7] == 'g' && options[8] == 'g'){
    return 1;
  }

  else if (options[0] == 'g' && options[3] == 'g' && options[6] == 'g'){
    return 1;
  }
  else if (options[1] == 'g' && options[4] == 'g' && options[7] == 'g'){
    return 1;
  }
  else if (options[2] == 'g' && options[5] == 'g' && options[8] == 'g'){
    return 1;
  }

  else if (options[0] == 'g' && options[4] == 'g' && options[8] == 'g'){
    return 1;
  }
  else if (options[2] == 'g' && options[4] == 'g' && options[6] == 'g'){
    return 1;
  }


  if (options[0] == 'b' && options[1] == 'b' && options[2] == 'b'){
    return 2;
  }
  else if (options[3] == 'b' && options[4] == 'b' && options[5] == 'b'){
    return 2;
  }
  else if (options[6] == 'b' && options[7] == 'b' && options[8] == 'b'){
    return 2;
  }

  else if (options[0] == 'b' && options[3] == 'b' && options[6] == 'b'){
    return 2;
  }
  else if (options[1] == 'b' && options[4] == 'b' && options[7] == 'b'){
    return 2;
  }
  else if (options[2] == 'b' && options[5] == 'b' && options[8] == 'b'){
    return 2;
  }

  else if (options[0] == 'b' && options[4] == 'b' && options[8] == 'b'){
    return 2;
  }
  else if (options[2] == 'b' && options[4] == 'b' && options[6] == 'b'){
    return 2;
  }

  return -1;
}
function processInput(buttonNumber){  
    if(turn == 0 && options[buttonNumber-1] == '0'){
      options[buttonNumber-1] = 'g';
      turn = 1;
      return 'green';
    }
    if(turn == 1 && options[buttonNumber-1] == '0'){
      turn = 0;
      options[buttonNumber-1] = 'b';
      return 'blue';
    }
    if (options[buttonNumber-1] == 'b')
    {
      return 'blue';
    }
    else{
      return 'green';
    }
}
function setWinDrawStatus(){
    if(checkWin() == 1){
      return "GREEN HAS WON";
    }
    if(checkWin() == 2){
      return "BLUE HAS WON";
    }
    if (isGameDrawen())
      return "The Result is Draw";
    
    if(checkWin() == -1){
        return getTurn();
    }

}
function getTurn(){
  if (turn == 1){
    return 'Blue\'s Turn';
  }
  return 'Green\'s Turn';
}

export default function App() {
  const [button1Color,setButton1Color] = React.useState('red');
  const [button2Color,setButton2Color] = React.useState('red');
  const [button3Color,setButton3Color] = React.useState('red');
  const [button4Color,setButton4Color] = React.useState('red');
  const [button5Color,setButton5Color] = React.useState('red');
  const [button6Color,setButton6Color] = React.useState('red');
  const [button7Color,setButton7Color] = React.useState('red');
  const [button8Color,setButton8Color] = React.useState('red');
  const [button9Color,setButton9Color] = React.useState('red');
  const [_turn,setTurn] = React.useState('Green\'s Turn');
  const [displayModal,setDisplayModal] = React.useState(false);

  return (
    <View style={styles.container}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />      
        <View style={styles.topView}>
          <Text style={styles.topMainText}>TIC TAC TOE</Text>
          <Text style={styles.turnText}>{_turn}</Text>
        </View>
        <View style = {styles.board}>
            <View style={styles.row}>                
                <TouchableOpacity 
                  style={[styles.inputView,{backgroundColor: button1Color}]}
                  onPress = { ()=>{setButton1Color(processInput('1'));setTurn(setWinDrawStatus());
                  (setWinDrawStatus() == 'Blue\'s Turn' || setWinDrawStatus() == 'Green\'s Turn')? null: setDisplayModal(!displayModal);}}
                  />
                <TouchableOpacity 
                  style={[styles.inputView,{backgroundColor: button2Color}]}
                  onPress = { ()=>{setButton2Color(processInput('2'));setTurn(setWinDrawStatus());
                  (setWinDrawStatus() == 'Blue\'s Turn' || setWinDrawStatus() == 'Green\'s Turn')? null: setDisplayModal(!displayModal);}}
                  />
                  <TouchableOpacity 
                  style={[styles.inputView,{backgroundColor: button3Color}]}
                  onPress = { ()=>{setButton3Color(processInput('3'));setTurn(setWinDrawStatus());
                  (setWinDrawStatus() == 'Blue\'s Turn' || setWinDrawStatus() == 'Green\'s Turn')? null: setDisplayModal(!displayModal);}}
                  />
            </View>
            <View style={styles.row}>
                <TouchableOpacity 
                  style={[styles.inputView,{backgroundColor: button4Color}]}
                  onPress = { ()=>{setButton4Color(processInput('4'));
                  setTurn(setWinDrawStatus());
                  (setWinDrawStatus() == 'Blue\'s Turn' || setWinDrawStatus() == 'Green\'s Turn')? null: setDisplayModal(!displayModal);
                  
                  }}
                  />
                  <TouchableOpacity 
                  style={[styles.inputView,{backgroundColor: button5Color}]}
                  onPress = { ()=>{setButton5Color(processInput('5'));setTurn(setWinDrawStatus());
                  (setWinDrawStatus() == 'Blue\'s Turn' || setWinDrawStatus() == 'Green\'s Turn')? null: setDisplayModal(!displayModal);}}
                  />
                  <TouchableOpacity 
                  style={[styles.inputView,{backgroundColor: button6Color}]}
                  onPress = { ()=>{setButton6Color(processInput('6'));setTurn(setWinDrawStatus());
                  (setWinDrawStatus() == 'Blue\'s Turn' || setWinDrawStatus() == 'Green\'s Turn')? null: setDisplayModal(!displayModal);}}
                  />
            </View>
            <View style={styles.row}>
                <TouchableOpacity 
                  style={[styles.inputView,{backgroundColor: button7Color}]}
                  onPress = { ()=>{setButton7Color(processInput('7'));setTurn(setWinDrawStatus());
                  (setWinDrawStatus() == 'Blue\'s Turn' || setWinDrawStatus() == 'Green\'s Turn')? null: setDisplayModal(!displayModal);}}
                  />
                  <TouchableOpacity 
                  style={[styles.inputView,{backgroundColor: button8Color}]}
                  onPress = { ()=>{setButton8Color(processInput('8'));setTurn(setWinDrawStatus());
                  (setWinDrawStatus() == 'Blue\'s Turn' || setWinDrawStatus() == 'Green\'s Turn')? null: setDisplayModal(!displayModal);}}
                  />
                  <TouchableOpacity 
                  style={[styles.inputView,{backgroundColor: button9Color}]}
                  onPress = { ()=>{setButton9Color(processInput('9'));setTurn(setWinDrawStatus());
                  (setWinDrawStatus() == 'Blue\'s Turn' || setWinDrawStatus() == 'Green\'s Turn')? null: setDisplayModal(!displayModal);}}
                  />     
            </View>
        </View>
        <View style={styles.bottomView}>
          <TouchableOpacity 
          style = {styles.replayButton} 
          onPress = { ()=>{
              setButton1Color('red');
              setButton2Color('red');
              setButton3Color('red');
              setButton4Color('red');
              setButton5Color('red');
              setButton6Color('red');
              setButton7Color('red');
              setButton8Color('red');
              setButton9Color('red');
              turn = 0;
              options = ['0','0','0','0','0','0','0','0','0'];
              setTurn('Green\'s Turn');
          }}
          >
            <Text style = {styles.replayText}>
              RE PLAY
            </Text>
          </TouchableOpacity>
        </View>
         <View style={{marginTop: 22}}>

      <Modal
        animationType="slide"
        transparent={false}
        visible={displayModal}
        onRequestClose={() => {
          alert('Modal has been closed.');
        }}>
        <View style={styles.modalView}>
          <View style={{flex: 0.3}}>
                <Text style={styles.topMainText}>TIC TAC TOE</Text>
          </View>
          <View style= {styles.modalSubView}>
              <Text style={styles.resultText}>RESULT</Text>
              <Text style={styles.modalMessageText}>{_turn}</Text>
          </View>
          <View style={{flex: 0.2,paddingTop: '10%'}}>
            <TouchableHighlight
                style = {styles.replayButton} 
                onPress = { ()=>{
                setButton1Color('red');
                setButton2Color('red');
                setButton3Color('red');
                setButton4Color('red');
                setButton5Color('red');
                setButton6Color('red');
                setButton7Color('red');
                setButton8Color('red');
                setButton9Color('red');
                turn = 0;
                options = ['0','0','0','0','0','0','0','0','0'];
                setTurn('Green\'s Turn');
                  setDisplayModal(!displayModal);
              }}>
              <Text style = {styles.replayText}>
                PLAY AGAIN
              </Text>
              </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView:{
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  modalSubView:{
    flex: 0.45,
    borderRadius: 8,
    minWidth: '90%',
    backgroundColor: 'black',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 6 },
    shadowRadius: 8,
    shadowOpacity: 0.7,
  },
  modalMessageText:{
      fontSize: 30,
      fontWeight: '900',
      alignItems: 'center',
      color: 'white',
      paddingVertical: '4%'
  },
  resultText:{
        fontSize: 50,
      fontWeight: '900',
      alignItems: 'center',
      color: 'red',
      paddingVertical: '10%'  
  },
  board: {
    flex: 0.5,
    flexDirection: 'column',
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 6 },
    shadowRadius: 8,
    shadowOpacity: 0.7,
  },
  row:{
    width: 300,
    minWidth: '90%',
   flex: 2,
   flexDirection: 'row',
  },
  inputView:{
    flex: 6,
    borderColor: 'black',
    borderWidth: 3,
    opacity: 0.7
  },
  topView: {
    alignItems: 'center',
    minWidth: '90%',
    flex: 0.3,
  },
  bottomView:{
    paddingTop: 30,
    width: 300,
    minWidth: '90%',
    flex: 0.2,
  },
  replayButton:{
    alignItems: 'center', 
    marginTop: 25,
    borderRadius: 6,
    minWidth: '90%',
    height: 45,
    backgroundColor: 'black',

    shadowColor: 'black',
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 8,
    shadowOpacity: 0.3,

  },
  replayText:{
    marginTop: 2,
    fontSize: 30,
    color: 'white',
    fontWeight: '800'
  },
  topMainText:{
    paddingTop: 50,
    paddingBottom: 10,
    fontSize: 45,
    maxWidth: '90%',
    fontWeight: '900',

    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.7,
  },
  turnText: {
    fontWeight: '600',
    fontSize: 30,


    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 1.1,
    shadowOpacity: 0.7,
  }
});