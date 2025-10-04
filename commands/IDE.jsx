import { View, ScrollView, Image, Text } from "react-native";
import Markdown from "react-native-markdown-display";

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
          Important IDEs
        </Text>
      </View>

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
            marginBottom: 30,
          },
          heading2: {
            color: "white",
            fontSize: 22,
            marginTop: 25,
            marginBottom: 10,
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
      >
        {ideMarkdown}
      </Markdown>
    </ScrollView>
  );
}
