import { Button, StyleSheet, Text, TextInput, View, ScrollView, Image ,Modal} from 'react-native';
import { useState } from 'react';
function GoalInput(props){
  function goalInputHandler(enterdText){
    SetenteredText(enterdText);
  }
  function appGoalHandler(){
    props.onAddGoal(enterdText);
    SetenteredGoalText('');
  }
  const [enterdText, SetenteredText]= useState('');
  return(
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image 
          style={styles.image}
          source={require('../assets/snack-icon.png')}
         />
        <TextInput
          style={styles.textInput}
          placeholder="Add Your Goals Here"
          onChangeText={goalInputHandler}
          value={enterdText}
        />
        <View style={styles.buttoncontainer}>
          <View style={styles.button}>
            <Button title='Add Goal'  onPress={appGoalHandler} color='#820000'/>
          </View>
          <View style={styles.button}>
            <Button title='cancel' onPress={props.oncancel} color='#820000'/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;
const styles = StyleSheet.create({
  inputContainer:{
    flex:1,
    justifyContent:"center",
    padding:16,
    alignItems:'center',
    paddingBottom:24,
    backgroundColor:'#E3F6FF'
  },
  textInput:{
    borderWidth:1,
    borderColor:'#400E32',
    width:'100%',
    padding:8
  },
  buttoncontainer :{
    marginTop:16,
    flexDirection:'row',
  },
  button: {
    width:100,
    marginHorizantal:12,
  },
  image:{
    width: 100,
    height:100,
    margin:20
  }
});