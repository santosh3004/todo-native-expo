import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, Text, View,FlatList,SafeAreaView,Alert,TouchableWithoutFeedback,Keyboard } from 'react-native';
import Header from './components/header';
import Task from './components/task';
import AddTask from './components/addTask';
import { v4 as uuidv4 } from 'uuid';
export default function App() {
  const [tasks, setTasks] = useState([
    {"task":"HTML I","done":true,"id":"1"},
    {"task":"CSS","done":true,"id":"2"},
    {"task":"Responsive design","done":true,"id":"3"},
    {"task":"Git","done":true,"id":"4"},
    {"task":"JavaScript I","done":true,"id":"5"},
    {"task":"JavaScript II","done":false,"id":"6"}
    ]);

    const addTask=(text)=>{
     if(!text){
Alert.alert('NO TASKS?','Please enter the task title',[{text:'OK'}])
     }else{
      setTasks(prevTasks=>{
        return [{  task:text, id:uuidv4(),}, ...prevTasks]
      })
    }
    }

    const deleteTask=(id)=>{
      setTasks(prevTasks=>{
        return prevTasks.filter(task=>task.id!=id)
      })
    }



  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
    <SafeAreaView style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <AddTask addTask={addTask}/>
        <View style={styles.list}>

        <FlatList
data={tasks} renderItem={({item})=>(
<Task item={item} deleteTask={deleteTask}/>
)}/>
      </View>
      </View>

      
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
   
  flex:1,
    backgroundColor: '#fff',

  },
  content: {
    
    padding: 30,
    backgroundColor: 'green',
   
flex:1,
    
  },
  list: {
   flex:1,
    padding:10,
    marginTop: 30,
    backgroundColor: 'white',
    justifyContent:'space-around'
  }
});
