import { View, ScrollView, Image, Text, TouchableOpacity, Alert } from "react-native";
import Markdown from "react-native-markdown-display";
import * as Clipboard from "expo-clipboard";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const bashMarkdown = `
**Docker** is a platform for building, packaging, and running applications as lightweight, portable containers.
Containers bundle an app together with its runtime, libraries and settings into a single image, so the app runs the same on any machine.

Docker is heavily used for development, CI/CD, microservices, and deploying to cloud environments.
Key components include the Docker Engine (runtime), Docker images, Docker Hub (image registry), and Docker Desktop (macOS/Windows).

Works natively on Linux and via Docker Desktop or WSL2 on macOS and Windows.

---

## - Docker Basics

\`\`\`bash
docker version      # Show Docker version
docker info         # System Docker info
docker help         # Docker commands
\`\`\`

---

## - Images

\`\`\`bash
cp file1 file2      # Copy file
mv file1 file2      # Move or rename file
cat file.txt        # Display file content
touch file.txt      # Create empty file
head file.txt       # Show first 10 lines
tail file.txt       # Show last 10 lines
\`\`\`

---

## - Container Listing & Operations

\`\`\`bash
docker ps              # List running containers
docker ps -a           # List all containers
docker run <image>     # Run container
docker run -it <image> # Interactive mode
docker run -d <image>  # Detached mode
docker run --name <name> <image>  # Run with name
docker start <container>    # Start container
docker stop <container>     # Stop container
docker restart <container>  # Restart container
docker rm <container>       # Remove container
\`\`\`

---

## - Process Management

\`\`\`bash
ps                     # Show running processes
top                    # Show system processes
kill <pid>             # Kill a process by ID
htop                   # Interactive process viewer (if installed)
\`\`\`

---

## - Networking

\`\`\`bash
ping google.com        # Test connection
ifconfig               # Show network interfaces
curl <url>             # Fetch data from a URL
wget <url>             # Download file from a URL
\`\`\`

---

## - Useful Shortcuts

\`\`\`bash
Ctrl + C    # Stop running command
Ctrl + L    # Clear terminal
Ctrl + R    # Search command history
!!          # Repeat last command
!<number>   # Run command from history
\`\`\`

---

**Tip:**  
Use \`man <command>\` to read the manual for any command (e.g., \`man ls\`).
`;

export default function Docker() {
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
          source={require("../assets/Docker.png")}
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
          Docker CLI
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
        {bashMarkdown}
      </Markdown>
    </ScrollView>
  );
}
