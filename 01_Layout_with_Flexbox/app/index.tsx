import { ExpandableSection } from "@/components/disclosure_toggle";
import { APP_STRINGS } from "@/constant/constant_text";
import { router } from "expo-router";
import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Learn Layout</Text>
        <Text style={styles.normalText}>{APP_STRINGS.intro}</Text>

        <ExpandableSection
          title={APP_STRINGS.flex.title}
          children={APP_STRINGS.flex.children}
          buttonTitle={APP_STRINGS.flex.buttonTitle}
          onButtonPress={() => router.push("/screens/flex")}
        ></ExpandableSection>
        <ExpandableSection
          title={APP_STRINGS.flexDirection.title}
          children={APP_STRINGS.flexDirection.children}
          buttonTitle={APP_STRINGS.flexDirection.buttonTitle}
          onButtonPress={() => router.push("/screens/flexDirection")}
        ></ExpandableSection>
        <ExpandableSection
          title={APP_STRINGS.layoutDirection.title}
          children={APP_STRINGS.layoutDirection.children}
          buttonTitle={APP_STRINGS.layoutDirection.buttonTitle}
          onButtonPress={() => router.push("/screens/layoutDirection")}
        ></ExpandableSection>
        <ExpandableSection
          title={APP_STRINGS.justifyContent.title}
          children={APP_STRINGS.justifyContent.children}
          buttonTitle={APP_STRINGS.justifyContent.buttonTitle}
          onButtonPress={() => router.push("/screens/alignItems")}
        ></ExpandableSection>
        <ExpandableSection
          title={APP_STRINGS.alignItem.title}
          children={APP_STRINGS.alignItem.children}
          buttonTitle={APP_STRINGS.alignItem.buttonTitle}
          onButtonPress={() => router.push("/screens/alignItems")}
        ></ExpandableSection>
        <ExpandableSection
          title={APP_STRINGS.alignSelf.title}
          children={APP_STRINGS.alignSelf.children}
          buttonTitle={APP_STRINGS.alignSelf.buttonTitle}
          onButtonPress={() => router.push("/screens/alignSelf")}
        ></ExpandableSection>
        <ExpandableSection
          title={APP_STRINGS.alignContent.title}
          children={APP_STRINGS.alignContent.children}
          buttonTitle={APP_STRINGS.alignContent.buttonTitle}
          onButtonPress={() => router.push("/screens/alignContent")}
        ></ExpandableSection>
        <ExpandableSection
          title={APP_STRINGS.flexWrap.title}
          children={APP_STRINGS.flexWrap.children}
          buttonTitle={APP_STRINGS.flexWrap.buttonTitle}
          onButtonPress={() => router.push("/screens/flexWrap")}
        ></ExpandableSection>
        <ExpandableSection
          children={APP_STRINGS.flexBasics.children}
          title={APP_STRINGS.flexBasics.title}
        ></ExpandableSection>
        <ExpandableSection
          title={APP_STRINGS.rowGap.title}
          children={APP_STRINGS.rowGap.children}
        ></ExpandableSection>
        <ExpandableSection
          title={APP_STRINGS.widthAndheigh.title}
          children={APP_STRINGS.widthAndheigh.children}
        ></ExpandableSection>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 22,
    paddingTop: 25,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 35,
    fontWeight: "700",
  },
  normalText: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default HomeScreen;
