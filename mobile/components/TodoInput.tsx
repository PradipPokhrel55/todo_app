import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import { COLORS } from "@/constants/colors";
import { TodoCategory } from "@/types/todo";

interface Props {
  onAdd: (text: string, category: TodoCategory) => void;
  disabled: boolean;
  defaultCategory?: TodoCategory;
}

export default function TodoInput({ onAdd, disabled, defaultCategory = 'Personal' }: Props) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState<TodoCategory>(defaultCategory);

  const submit = () => {
    onAdd(text, category);
    setText("");
  };

  return (
    <View>
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={[styles.categoryButton, category === 'Personal' && styles.activeCategory]}
          onPress={() => setCategory('Personal')}
        >
          <Text style={[styles.categoryText, category === 'Personal' && styles.activeCategoryText]}>Personal</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.categoryButton, category === 'Work' && styles.activeCategory]}
          onPress={() => setCategory('Work')}
        >
          <Text style={[styles.categoryText, category === 'Work' && styles.activeCategoryText]}>Work</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <TextInput
          placeholder="Add a todo..."
          value={text}
          onChangeText={setText}
          style={styles.input}
          editable={!disabled}
        />
        <Button title="Add" onPress={submit} disabled={disabled} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 8,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 6,
    paddingHorizontal: 10,
    marginRight: 8,
    height: 40,
  },
  categoryContainer: {
    flexDirection: 'row',
    marginBottom: 8,
    gap: 8,
  },
  categoryButton: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.primary,
    backgroundColor: 'transparent',
  },
  activeCategory: {
    backgroundColor: COLORS.primary,
  },
  categoryText: {
    color: COLORS.primary,
    fontSize: 12,
  },
  activeCategoryText: {
    color: '#fff',
  },
});
