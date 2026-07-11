import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ExpandableSectionProps {
  title: string;
  children: React.ReactNode;
  buttonTitle?: string;
  onButtonPress?: () => void;
}

export const ExpandableSection = ({
  title,
  children,
  buttonTitle,
  onButtonPress,
}: ExpandableSectionProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View>
      <TouchableOpacity onPress={() => setExpanded(!expanded)}>
        <Text style={styles.title}>
          {expanded ? "▼" : "▶"} {title}
        </Text>
      </TouchableOpacity>
      {expanded && (
        <View>
          <Text style={styles.children}>{children}</Text>
          {buttonTitle && onButtonPress && (
            <Button title={buttonTitle} onPress={onButtonPress} />
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 12,
    marginBottom: 3,
  },
  children: {
    fontSize: 16,
  },
});
