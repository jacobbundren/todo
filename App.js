import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TodoItem from "./components/todo-item";

export default function App() {
  return (
    <View style={styles.container}>
      <TodoItem title={"Hello"} />
      <TodoItem title={"Goodbye"} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
