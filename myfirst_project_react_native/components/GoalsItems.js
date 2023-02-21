import { View, Text, StyleSheet, Pressable} from 'react-native';
function GoalsItems(props){
  return(
    <Pressable 
        android_ripple={{color:'red'}} 
        onPress={props.onDeletItem.bind(this, props.id)}
      >
      <View style={styles.goalItems}>
        <Text style={styles.goalItemstext}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalsItems;
const styles = StyleSheet.create({
  goalItems:{
    margin:8,
    padding:8,
    borderRadius:6,
    backgroundColor:'blue',
    color:'BLACK'
  },
  goalItemstext:{
    color:'white',
  }

});
