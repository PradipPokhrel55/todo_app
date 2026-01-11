import { View, Text, Pressable, StyleSheet } from "react-native";
import { Todo } from "@/types/todo";
import { COLORS } from "@/constants/colors";

interface Props {
  todo: Todo;
  onToggle: () => void;
  onDelete: () => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: Props) {
  return (
    <View style={styles.item}>
      <Pressable onPress={onToggle} style={{ flex: 1 }}>
        <Text
          style={[
            styles.text,
            todo.completed && styles.completed,
          ]}
        >
          {todo.title}
        </Text>
      </Pressable>

      <Pressable onPress={onDelete}>
        <Text style={styles.delete}>❌</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#fff",
    marginBottom: 8,
    borderRadius: 6,
  },
  text: {
    fontSize: 16,
    color: COLORS.text,
  },
  completed: {
    textDecorationLine: "line-through",
    color: COLORS.gray,
  },
  delete: {
    marginLeft: 12,
    fontSize: 18,
  },
});
