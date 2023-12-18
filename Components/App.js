import React, { useState } from 'react'
import GoalInput from './GoalInput';
import GoalItem from './GoalItem';
import {
    View,
    Button
  } from 'react-native';

const App = () => {

    const [enteredGoalText, setEnteredGoalText] = useState('');
    const [courseGoals, setCourseGoals] = useState([]);
    const [modalIsVisible, setmodalIsVisible] = useState(false);


    function startAddGoalHandler(){
      setmodalIsVisible(true)
    }



    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
      }
      function addGoalHandler() {
        setCourseGoals((currentCourseGoals) => [...currentCourseGoals, {text:enteredGoalText, id:Math.random().toString()},]);

        setEnteredGoalText('');
      }


      function deletGoalHandler(id){
        setCourseGoals(currentCourseGoals =>{
            return currentCourseGoals.filter((goal)=> goal.id !== id);
        })
      
      }


  return (
    <View >
      <Button title='Add New Goal'color="#5e0acc" onPress={startAddGoalHandler}/>
    <GoalInput goalInputHandler={goalInputHandler} addGoalHandler={addGoalHandler} enteredGoalText={enteredGoalText}/>
    <GoalItem courseGoals={courseGoals} deletGoalHandler={deletGoalHandler}  />
    </View>
  )
}

export default App