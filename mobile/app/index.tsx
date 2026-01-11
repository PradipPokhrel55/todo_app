import { View, FlatList, StyleSheet, Text } from "react-native";
import TodoInput from "@/components/TodoInput";
import TodoItem from "@/components/TodoItem";
import TodoStatus from "@/components/TodoStatus";
import { useTodos } from "@/hooks/useTodos";
import { COLORS } from "@/constants/colors";

export default function Home() {
  const { todos, addTodo, toggleTodo, deleteTodo, MAX_TODOS } = useTodos();

  const isFull = todos.length >= MAX_TODOS;

  return (
    <View style={styles.container}>
      <TodoStatus count={todos.length} max={MAX_TODOS} />

      <TodoInput onAdd={addTodo} disabled={isFull} />

      {isFull && (
        <Text style={styles.limitText}>
          You have reached the maximum of {MAX_TODOS} tasks!
        </Text>
      )}

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem
            todo={item}
            onToggle={() => toggleTodo(item.id)}
            onDelete={() => deleteTodo(item.id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: COLORS.background,
  },
  limitText: {
    textAlign: "center",
    color: COLORS.primary,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
