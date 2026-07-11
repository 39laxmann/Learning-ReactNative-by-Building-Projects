import styles from "@/constant/styles";
import { PropsWithChildren } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { BackButton } from "./back_button";

type PreviewLayoutProps = PropsWithChildren<{
  label: string;
  values: string[];
  selectedValue: string;
  setSelectedValue: (value: string) => void;
}>;

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}: PreviewLayoutProps) => (
  <View style={{ padding: 15, marginTop: 20, flex: 1 }}>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
      <BackButton />

      <Text style={styles.label}>{label}</Text>
    </View>

    <View style={styles.row}>
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[styles.button, selectedValue === value && styles.selected]}
        >
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, { [label]: selectedValue }]}>
      {children}
    </View>
  </View>
);

export default PreviewLayout;
