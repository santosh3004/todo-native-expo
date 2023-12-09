
import { StyleSheet,View,Text ,TextInput,Button} from 'react-native'
import { useState } from 'react'

export const AddTask = ({addTask}) => {
  const [text,setText]=useState('');

  const changeHandler=(val)=>{
    setText(val);
  }
  return (
    <View>
      <TextInput style={styles.input}
      placeholder='Add New Task'
      onChangeText={changeHandler}
      />
      <Button title="Add Task" onPress={()=>{addTask(text)}}/>
    </View>
  )
}
const styles=StyleSheet.create({
  input:{
    padding:10,
    backgroundColor:'white',
    margin:10,
    paddingVertical:6,
    borderBottomWidth:1,
    borderBottomColor:'grey',
  }
})

export default AddTask;