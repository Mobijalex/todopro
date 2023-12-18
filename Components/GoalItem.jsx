import { StyleSheet, Text, View, FlatList,Pressable } from 'react-native';
import React from 'react';

const GoalItem = ({ courseGoals,deletGoalHandler,}) => {


  return (
    <View style={styles.goalsContainer}>
    <FlatList data={courseGoals} alwaysBounceVertical={false} renderItem={(itemData) =>{
      
      return(
        <Pressable style={styles.goalItem} android_ripple={{color:'#dddddd '}} onPress={() =>deletGoalHandler(itemData.item.id)}>
       <Text style={styles.goalText}> {itemData.item.text}</Text>
    </Pressable>
      )
    }}
    keyExtractor={(item,index)=>{
      return(
        item.id
      )
    }}
    />
       
    </View>
    
   );
};

export default GoalItem;

const styles = StyleSheet.create({
    goalsContainer:{
        
      },
      goalItem:{
        margin:8,
       
        borderRadius:6,
        backgroundColor:"#560acc",
        color:"white"
      },

      goalText:{
       color:"white",
       padding:8
      }
});

