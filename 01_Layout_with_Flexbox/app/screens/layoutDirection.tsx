import { BackButton } from "@/components/back_button";
import styles from "@/constant/styles";
import { PropsWithChildren, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const LayoutDirection = () => {
  const [layoutDirection, setLayoutDirection] = useState("ltr");

  return (
    <PreviewLayout
      label="direction"
      values={["ltr", "rtl"]}
      selectedValue={layoutDirection}
      setSelectedValue={setLayoutDirection}
    >
      <View style={[styles.box, { backgroundColor: "powderblue" }]} />
      <View style={[styles.box, { backgroundColor: "skyblue" }]} />
      <View style={[styles.box, { backgroundColor: "steelblue" }]} />
    </PreviewLayout>
  );
};

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
    <View style={{ flexDirection: "row", gap: "12", alignItems: "center" }}>
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

export default LayoutDirection;
