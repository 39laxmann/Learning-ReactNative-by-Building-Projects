import PreviewLayout from "@/components/preview_layout";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

const AlignContentLayout = () => {
  const [alignContent, setAlignContent] = useState("flex-start");

  return (
    <PreviewLayout
      label="alignContent"
      selectedValue={alignContent}
      values={[
        "flex-start",
        "flex-end",
        "stretch",
        "center",
        "space-between",
        "space-around",
      ]}
      setSelectedValue={setAlignContent}
    >
      <View style={[styleForfile.boxStyle, { backgroundColor: "orangered" }]} />
      <View style={[styleForfile.boxStyle, { backgroundColor: "orange" }]} />
      <View
        style={[styleForfile.boxStyle, { backgroundColor: "mediumseagreen" }]}
      />
      <View
        style={[styleForfile.boxStyle, { backgroundColor: "deepskyblue" }]}
      />
      <View
        style={[styleForfile.boxStyle, { backgroundColor: "mediumturquoise" }]}
      />
      <View
        style={[styleForfile.boxStyle, { backgroundColor: "mediumslateblue" }]}
      />
      <View style={[styleForfile.boxStyle, { backgroundColor: "purple" }]} />
    </PreviewLayout>
  );
};

export default AlignContentLayout;

const styleForfile = StyleSheet.create({
  boxStyle: {
    height: 50,
    width: 80,
  },
});
