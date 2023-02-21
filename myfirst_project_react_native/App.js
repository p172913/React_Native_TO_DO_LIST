import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList} from 'react-native';

import GoalsItems from './components/GoalsItems'
import GoalInput from './components/GoalInput'
export default function App() {
  const [modalVisual,SetModalVisual]=useState(false);
  const [courseGoals,SetCourseGoals] = useState([]);
  function addGoalHandle(enterdText){
    SetCourseGoals((currentGoals)=>[
      ...currentGoals,
      {text: enterdText, id: Math.random().toString()},
    ]);}
  function deleteOnHold(id){
    SetCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
  });
  }
  function StartGoalHandle(){
    SetModalVisual(true);
  }
  function endGoalHandler(){
    SetModalVisual(false);
  }

  return (
    <View style={styles.container}>
    <Button
      title='GOALS'
      color='#5D3891'
      onPress={SetModalVisual}
    />
    <GoalInput 
        visible={modalVisual} 
        onAddGoal={addGoalHandle} 
        oncancel={endGoalHandler}
      />
      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalsItems 
              text={itemData.item.text}
              id={itemData.item.id}
              onDeletItem={deleteOnHold}
              />;
          }}
          keyExtractor={(item,index)=>{
            return item.id;
          }}
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:50,
    paddingHorizontal: 16
  },
  goalContainer:{
    flex:4
  },
});
