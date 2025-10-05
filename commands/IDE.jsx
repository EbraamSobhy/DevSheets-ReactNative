import { View, ScrollView, Image, Text, TouchableOpacity, Alert } from "react-native";
import Markdown from "react-native-markdown-display";
import * as Clipboard from "expo-clipboard";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ideMarkdown = `
**An IDE (Integrated Development Environment)** is a software application that provides developers with tools to write, test, and debug code efficiently.

---

## What’s Inside an IDE?
- **Code Editor** – write and format code  
- **Compiler / Interpreter** – convert code into executable programs  
- **Debugger** – find and fix errors easily  
- **Terminal / Shell** – run commands inside the IDE  
- **Extensions / Plugins** – add extra features like linters, formatters, etc.  

---

## - Web Development
\`\`\`bash
Visual Studio Code
Sublime Text
Atom (discontinued but loved)
Brackets
\`\`\`

---

## - JavaScript / TypeScript
\`\`\`bash
Visual Studio Code
WebStorm
\`\`\`

---

## - Java
\`\`\`bash
IntelliJ IDEA
Eclipse
NetBeans
\`\`\`

---

## - Python
\`\`\`bash
PyCharm
VS Code (with Python plugin)
Spyder
Jupyter Notebook
\`\`\`

---

## - C / C++
\`\`\`bash
CLion
Code::Blocks
Dev-C++
Visual Studio
\`\`\`

---

## - Mobile Development
\`\`\`bash
Android Studio (for Android)
Xcode (for iOS)
\`\`\`

---

## - Cross-Platform & Others
\`\`\`bash
Rider (.NET)
PhpStorm (PHP)
RubyMine (Ruby)
\`\`\`

---

**Tip:**  
Choose an IDE that fits your workflow and language best.  
For most developers, **VS Code** is a great starting point!
`;

export default function IDE() {
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
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <Image
          source={require("../assets/VSCode.png")}
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
          IDEs for Developers
        </Text>
      </View>

      {/* Markdown Content */}
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
            fontWeight: "bold",
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
        {ideMarkdown}
      </Markdown>
    </ScrollView>
  );
}
