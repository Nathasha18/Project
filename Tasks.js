import * as React from 'react';
import { StyleSheet, Text, View, Button,ImageBackground } from 'react-native';
import bg from './assets/bg.jpeg';
import { NavigationContainer } from '@react-navigation/native';


import TodoItem from './Components/Todoitem';
import AddTodo from './Components/Addtodo';

export default function Tasks( ) {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' },
  ]);

  const pressHandler = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    setTodos(prevTodos => {
      return [
        { text, key: Math.random().toString() },
        ...prevTodos
      ];
    });
  };

 
  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('dismissed');
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default TasksScreen;