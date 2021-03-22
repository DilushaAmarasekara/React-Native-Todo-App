import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Header from './Components/header';
import TodoItem from './Components/TodoItem';
import AddTodos from './Components/addTodos';

export default function App() {
  const [todos, setTodos] = useState([
    {name: 'Study React-native', id: '1'},
    {name: 'Study AWS', id: '2'},
    {name: 'Study Spring-boot', id: '3'},
    {name: 'Take a lunch', id: '4'},
    {name: 'Watching TV', id: '5'},
  ]);

  const pressHandler = id => {
    setTodos(prevTodo => {
      return prevTodo.filter(todo => todo.id != id);
    });
  };

  const SubmitHandler = name => {
    if (name.length > 3) {
      setTodos(prevTodo => {
        return [{name: name, id: Math.random().toString()}, ...prevTodo];
      });
    } else {
      Alert.alert('OOPS!', 'Text must be grater than 3 chars', [
        {text: 'Understood', onPress: () => console.log('alert is closed')},
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log('touchable keyboard dissmiss');
      }}>
      <View style={styles.container}>
        {/* header <Header /> */}
        <Header />
        <View style={styles.content}>
          {/* to form*/}
          <AddTodos submitHandler={SubmitHandler} />
          <View style={styles.list}>
            <FlatList
              keyExtractor={item => item.id}
              data={todos}
              renderItem={({item}) => (
                <Text>
                  <TodoItem item={item} pressHandler={pressHandler} />
                </Text>
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
