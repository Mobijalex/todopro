import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal,
  Image,
} from 'react-native';

const GoalInput = ({
  goalInputHandler,
  addGoalHandler,
  enteredGoalText,
  modalIsVisible,
  endAddGoalHandler,
}) => {
  return (
    <Modal  visible={modalIsVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../Assets/Images/1694262.png')} />
        <TextInput
          style={styles.textInput}
          value={enteredGoalText}
          placeholder="your course goal"
          onChangeText={goalInputHandler}
        />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Add Goal" onPress={addGoalHandler}  color="black"/>
        </View>
        <View style={styles.button}>
          <Button title="Cancel" onPress={endAddGoalHandler} color="red" />
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 24,
    paddingTop: 24,
    paddingRight: 10,
    paddingLeft: 10,

  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius:6,
    width: '100%',
    color:'black',
    padding: 10,
  },

  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image:{
    width:100,
    height:100,
    margin:20
  },
 
});
