import { Button, SafeAreaView, StyleSheet, Text, TextInput, View,Modal } from 'react-native'


const GoalInput = ({goalInputHandler,addGoalHandler,enteredGoalText}) => {

  return (
    <Modal>
    <View style={styles.inputContainer}>
    <TextInput style={styles.textInput} value={enteredGoalText} placeholder='your course goal' onChangeText={goalInputHandler}/>
    <Button onPress={addGoalHandler}title='Add Goal'/>
  </View>
  </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({

    appContainer:{
        flex:1,
        padding:50,
        paddingHorizontal:16,
      },
      inputContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingBottom:24,
        paddingTop:24,
        paddingRight:10,
        paddingLeft:10,
        borderBottomWidth:1,
        borderBottomColor:"#cccccc"
      },
      textInput:{
        borderWidth:1,
        borderColor:"#cccccc",
        width:"70%",
        marginRight:8,
        padding:8
      },
     
})