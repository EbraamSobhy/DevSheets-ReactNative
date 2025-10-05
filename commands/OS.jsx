import { View, ScrollView, Image, Text, TouchableOpacity, Alert } from "react-native";
import Markdown from "react-native-markdown-display";
import * as Clipboard from "expo-clipboard";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const osMarkdown = `
**An Operating System (OS)** is system software that manages hardware, software, and resources — allowing users and applications to interact with the computer efficiently.

---

## - What Does an OS Do?

- **Manages Hardware:** Controls CPU, memory, storage, and peripherals  
- **Runs Applications:** Loads and executes programs  
- **User Interface:** Provides GUI or CLI for interaction  
- **File System Management:** Organizes files and directories  
- **Security:** Handles permissions and access control  
- **Networking:** Connects devices and enables communication  

---

## - Types of Operating Systems

\`\`\`bash
Windows          # Popular desktop OS from Microsoft
macOS            # Apple’s desktop operating system
Linux            # Open-source and highly customizable
Android          # Mobile OS based on Linux
iOS              # Apple’s mobile OS
\`\`\`

---

## - Common Linux Distributions

\`\`\`bash
Ubuntu           # Beginner-friendly and widely used
Debian           # Stable and reliable
Fedora           # Cutting-edge and developer-focused
Arch Linux       # Lightweight and customizable
Kali Linux       # Security testing and ethical hacking
CentOS / RHEL    # Enterprise-grade servers
\`\`\`

---

## - Basic OS Commands (Cross-Platform)

\`\`\`bash
shutdown -h now     # Shut down system (Linux/macOS)
reboot              # Restart system
tasklist            # Show running processes (Windows)
top                 # Show processes (Linux/macOS)
df -h               # Display disk usage
free -m             # Show memory usage
\`\`\`

---

## - Environment Variables

\`\`\`bash
echo $PATH          # Show executable search path
export VAR=value    # Set a variable (Linux/macOS)
set VAR=value       # Set a variable (Windows)
printenv VAR        # Display variable value
\`\`\`

---

## - System Information

\`\`\`bash
uname -a            # Show system information
lsb_release -a      # Show Linux distribution info
systeminfo          # Show Windows system info
uptime              # Display system uptime
hostname            # Show device name
\`\`\`

---

**Tip:**  
Learn one OS deeply (like Linux) — it helps you understand how all systems work at a lower level.
`;

export default function OS() {
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
          source={require("../assets/Windows.png")}
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
          Operating System
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
        {osMarkdown}
      </Markdown>
    </ScrollView>
  );
}
