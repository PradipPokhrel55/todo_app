import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "@/constants/colors";

interface Props {
  count: number;
  max: number;
}

export default function TodoStatus({ count, max }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {count} of {max} tasks added
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  text: {
    color: COLORS.primary,
    fontWeight: "bold",
    fontSize: 16,
  },
});
