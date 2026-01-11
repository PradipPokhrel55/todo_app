import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";
import { COLORS } from "@/constants/colors";

interface Props {
  onAdd: (text: string) => void;
  disabled: boolean;
}

export default function TodoInput({ onAdd, disabled }: Props) {
  const [text, setText] = useState("");

  const submit = () => {
    onAdd(text);
    setText("");
  };

  return (
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
  },
});
