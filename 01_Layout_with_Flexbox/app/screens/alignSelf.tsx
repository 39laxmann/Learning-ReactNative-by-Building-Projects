import { BackButton } from "@/components/back_button";
import styles from "@/constant/styles";
import { PropsWithChildren, useState } from "react";
import { FlexAlignType, Text, TouchableOpacity, View } from "react-native";

const AlignSelfLayout = () => {
  const [alignSelf, setAlignSelf] = useState<FlexAlignType>("stretch");

  return (
    <PreviewLayout
      label="alignSelf"
      selectedValue={alignSelf}
      values={["stretch", "flex-start", "flex-end", "center", "baseline"]}
      setSelectedValue={setAlignSelf}
    >
      <View
        style={[
          styles.box,
          {
            alignSelf,
            width: "auto",
            minWidth: 50,
            backgroundColor: "powderblue",
          },
        ]}
      />
      <View style={[styles.box, { backgroundColor: "skyblue" }]} />
      <View style={[styles.box, { backgroundColor: "steelblue" }]} />
    </PreviewLayout>
  );
};

type PreviewLayoutProps = PropsWithChildren<{
  label: string;
  values: FlexAlignType[];
  selectedValue: string;
  setSelectedValue: (value: FlexAlignType) => void;
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
    <View style={styles.container}>{children}</View>
  </View>
);

export default AlignSelfLayout;
