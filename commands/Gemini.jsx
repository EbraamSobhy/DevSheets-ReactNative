import { View, ScrollView, Image, Text, TouchableOpacity, Alert } from "react-native";
import Markdown from "react-native-markdown-display";
import * as Clipboard from "expo-clipboard";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const gitMarkdown = `

**Gemini** is a family of AI models from Google that can understand and generate text, images, and other types of media. It's also the name of Google's AI chatbot (formerly 
  Bard), which can help you with tasks like writing, planning, and getting information.

---

## - Download Node.js

   [Node.js](https://nodejs.org/en)

## - Prerequisites

\`\`\`bash
node -v
npm -v
\`\`\`

---

## - Installation

### - Windows

\`\`\`bash
npm install -g @google/generative-ai
npm update -g @google/generative-ai
\`\`\`

---

### - macOS

\`\`\`bash
# Install homebrew mac os
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew --version
brew update
brew doctor
brew install node

# Install Gemini CLI
npm install -g @google/gemini-cli
npm update -g @google/gemini-cli
\`\`\`

---

### - Linux

\`\`\`bash
sudo apt update
sudo apt install nodejs npm -y
sudo npm install -g @google/generative-ai
sudo npm update -g @google/generative-ai
\`\`\`

---

## - Verify Installation

\`\`\`bash
npm list -g @google/generative-ai
\`\`\`

---

## - Gemini CLI on Terminal
`;

export default function Git() {
  const handleCopy = (text) => {
    Clipboard.setStringAsync(text);
    Alert.alert("Copied!");
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#000000",
        padding: 16,
      }}
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <Image
            source={require("../assets/Gemini.png")}
            style={{
            width: 40,
            height: 40,
            marginRight: 10,
            resizeMode: "contain",
          }}
        />
        <Text
          style={{
            color: "#00ff88",
            fontSize: 26,
            fontWeight: "bold",
            fontFamily: "monospace",
          }}
        >
          Gemini CLI
        </Text>
      </View>

      {/* Markdown Commands */}
      <Markdown
        style={{
          body: {
            color: "white",
            fontSize: 16,
            lineHeight: 24,
            fontFamily: "monospace",
          },
          heading1: {
            color: "#00ff88",
            fontSize: 28,
            fontWeight: "bold",
            marginBottom: 10,
          },
          heading2: {
            color: "white",
            fontSize: 22,
            marginTop: 16,
            marginBottom: 15,
            fontWeight: "bold"
          },
          code_inline: {
            backgroundColor: "#003300",
            color: "#00ff88",
            borderRadius: 4,
            paddingHorizontal: 4,
          },
          code_block: {
            backgroundColor: "#001a00",
            color: "#00ff88",
            borderRadius: 8,
            padding: 10,
            fontFamily: "monospace",
          },
          fence: {
            backgroundColor: "#001a00",
            color: "#00ff88",
            borderRadius: 8,
            padding: 10,
          },
          strong: {
            color: "#39ff14",
          },
          link: {
            color: "#00ff88",
            fontSize: 20
          },
          image: { 
            borderRadius: 10, 
            marginVertical: 10 
        },

        }}
        rules={{
          fence: (node) => {
            const codeText = node.content;
            const language = node.info || "bash";

          return (
            <View
              key={Math.random()}
              style={{
                borderRadius: 8,
                marginVertical: 10,
                overflow: "hidden",
              }}
            >
              {/* Header Bar */}
              <View
                style={{
                  backgroundColor: "black",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingHorizontal: 12,
                  paddingVertical: 6,
                  borderWidth: 1,
                  borderColor: "green",
                  borderStyle: "solid", 
                  borderRadius: 6, 
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 13,
                    fontFamily: "monospace",
                  }}
                >
                  {language}
                </Text>

                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "transparent",
                  }}
                  onPress={() => handleCopy(codeText)}
                >
                  <MaterialCommunityIcons
                    name="content-copy"
                    size={14}
                    color="white"
                    style={{ marginRight: 4 }}
                  />
                  <Text
                    style={{
                      color: "white",
                      fontSize: 13,
                      fontWeight: "500",
                    }}
                  >
                    Copy
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Code Area */}
              <Text
                selectable
                style={{
                  color: "#00ff88",
                  fontFamily: "monospace",
                  fontSize: 14,
                  backgroundColor: "#001a00",
                  padding: 10,
                  lineHeight: 20,
                }}
              >
                {codeText.trim()}
              </Text>
            </View>
          );
            },
        }}
      >
        {gitMarkdown}
      </Markdown>
      <Image
        source={require("../assets/gemini cli.png")}
        style={{
            width: 380,
            height: 300,
            borderRadius: 16,
            resizeMode: "contain",
            marginVertical: 20,
            borderWidth: 1,
            borderColor: "#00ff88",
        }}
        />
    </ScrollView>
  );
}
