import { View, StyleSheet, FlatList } from "react-native";
import { useTodos } from "@/hooks/useTodos";
import TodoItem from "@/components/TodoItem";

export default function Personal() {
    const { todos, toggleTodo, deleteTodo } = useTodos();
    const personalTodos = todos.filter(todo => todo.category === 'Personal');

    return (
        <View style={styles.container}>
            <FlatList
                data={personalTodos}
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
        padding: 24,
    },
});
