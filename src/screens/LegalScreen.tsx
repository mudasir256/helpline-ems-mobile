import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Title } from "../components/ui";
import { LEGAL_UPDATED, legalDocs, type LegalDoc } from "../legal";
import { colors } from "../theme";

export function LegalScreen({ doc, onClose }: { doc: LegalDoc | null; onClose: () => void }) {
  const insets = useSafeAreaInsets();
  const content = doc ? legalDocs[doc] : null;

  return (
    <Modal animationType="slide" onRequestClose={onClose} visible={Boolean(content)}>
      {content ? (
        <View style={[styles.wrap, { paddingTop: insets.top }]}>
          <View style={styles.bar}>
            <Pressable accessibilityLabel="Close" hitSlop={10} onPress={onClose} style={styles.close}>
              <Ionicons color={colors.ink} name="close" size={22} />
            </Pressable>
          </View>
          <ScrollView contentContainerStyle={[styles.content, { paddingBottom: Math.max(insets.bottom, 16) + 24 }]}>
            <Title>{content.title}</Title>
            <Text style={styles.updated}>Last updated {LEGAL_UPDATED}</Text>
            <Text style={styles.intro}>{content.intro}</Text>
            {content.sections.map((section) => (
              <View key={section.heading} style={styles.section}>
                <Text style={styles.heading}>{section.heading}</Text>
                {section.body.map((paragraph) => (
                  <Text key={paragraph} style={styles.paragraph}>
                    {paragraph}
                  </Text>
                ))}
              </View>
            ))}
          </ScrollView>
        </View>
      ) : null}
    </Modal>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1, backgroundColor: colors.canvas },
  bar: { flexDirection: "row", justifyContent: "flex-end", paddingHorizontal: 16, paddingTop: 10 },
  close: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.paper,
    borderWidth: 1,
    borderColor: colors.line,
    alignItems: "center",
    justifyContent: "center",
  },
  content: { paddingHorizontal: 20, paddingTop: 6 },
  updated: { color: colors.muted, fontWeight: "700", fontSize: 12, marginTop: 8 },
  intro: { color: colors.ink, fontSize: 15, lineHeight: 23, marginTop: 14 },
  section: { marginTop: 22 },
  heading: { color: colors.forest, fontSize: 17, fontWeight: "800", marginBottom: 2 },
  paragraph: { color: colors.muted, fontSize: 15, lineHeight: 23, marginTop: 8 },
});
