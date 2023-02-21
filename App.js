import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, Text, View, Button, Alert } from 'react-native';
import { useState } from 'react';
import { db, TODOS_REF} from './firebase/Config';
import { child, push, ref, remove, update } from 'firebase/database';
import styles from './style/style';


export default function App() {

  const [newTodo, setNewTodo] = useState('');

  const addNewTodo = () => {
    if (newTodo.trim().length !== ""){
      const newTodoItem = {
        done: false,
        toodItem: newTodo
      }
      const newTodoItemKey = push(child(ref(db), TODOS_REF)).key;
      const updates = {};
      updates[TODOS_REF + newTodoItemKey] = newTodoItem;
      setNewTodo('');
      return update(ref(db), updates);
    }
  }


  return (
    <View style={styles.container}
    contentContainerStyle={styles.contentContainerStyle}>
      <Text style={styles.header}>Todolist</Text>
      <View style={styles.newItem}>
        <TextInput
        placeholder='Add new todo'
        value={newTodo}
        style={styles.textInput}
        onChangeText={setNewTodo}
        />
      </View>
      <View style={styles.buttonStyle}>
        <Button
        title='Add new Todo item'
        onPress={() => addNewTodo()}
        />
      </View>
    </View>
  );

}

