import { View, FlatList, StyleSheet, Text } from "react-native";
import TodoInput from "@/components/TodoInput";
import TodoItem from "@/components/TodoItem";
import TodoStatus from "@/components/TodoStatus";
import { useTodos } from "@/hooks/useTodos";
import { COLORS } from "@/constants/colors";
import StreakCalendar from '@/components/calendar';



export default function Home() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  return (
    <View style={styles.container}>
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
