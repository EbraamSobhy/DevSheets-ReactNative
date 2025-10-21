import { View, ScrollView, Image, Text, TouchableOpacity, Alert } from "react-native";
import Markdown from "react-native-markdown-display";
import * as Clipboard from "expo-clipboard";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const gitMarkdown = `

**Git** is a distributed version control system that helps developers track changes in code and collaborate efficiently.

**Version Control System**
- Keep careful track of changes in your ﬁles

- Collaborate with others on your projects more easily

- Test changes without losing the original versions

- Revert back to older versions when/if needed


-----

## - Configuration

\`\`\`bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
\`\`\`

## - Download Repository 

\`\`\`bash
git clone <URL>  # URL of Repository 
\`\`\`


## - Repository Setup

\`\`\`bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin <URL> 
git push -u origin main
\`\`\`


## - Staging & Committing

\`\`\`bash
git status              # Check file status
git add <file>          # Add file to staging area
git add .               # Add all files
git commit -m "Message" # Commit with message
\`\`\`


## - Branching & Merging

\`\`\`bash
git branch              # List branches
git branch <name>       # Create a branch
git checkout <name>     # Switch to branch
git merge <name>        # Merge branch
\`\`\`


## - Push & Pull

\`\`\`bash
git remote add origin <url>  # Add remote repository
git push -u origin main      # Push changes
git pull origin main         # Pull updates
\`\`\`


## - History

\`\`\`bash
git log                # Show commit history
git diff               # Show changes
git show <commit>      # Show specific commit
\`\`\`


## - Undo & Reset

\`\`\`bash
git restore <file>         # Discard changes
git reset --hard HEAD~1    # Undo last commit
\`\`\`

---

**Tip:**  
Use \`git status\` often to keep track of what’s happening!
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
            source={require("../assets/Git.png")}
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
          Git Commands
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
        bullet_list: {
            gap: 20,
        },
        hr: {
          borderColor: "#00ff88", 
          borderWidth: 0.5,
          marginVertical: 10,
          marginTop: 15
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
    </ScrollView>
  );
}
