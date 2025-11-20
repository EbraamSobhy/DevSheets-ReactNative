import { View, ScrollView, Image, Text, TouchableOpacity, Alert } from "react-native";
import Markdown from "react-native-markdown-display";
import * as Clipboard from "expo-clipboard";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const bashMarkdown = `
**Linux** is an open-source operating system that powers everything from personal computers and servers to smartphones, cloud systems, and embedded devices.

It’s widely used by developers, system administrators, cybersecurity professionals, and even everyday users who want a fast, secure, and customizable system.

---

## - Navigation & Directories

\`\`\`bash
cd

tmux new

tmux new-session

tmux new-session -A -s mysession  # Start to session 'mysession'

tmux new -s mysession   # Start session 'mysession'

tmux kill-session  # Kill current session

tmux kill-session -t mysession      # Kill session 'mysession'

tmux kill-session -a  # Kill all sessions except current

tmux kill-session -a -t mysession   # Kill all sessions except 'mysession'

tmux ls                   # List sessions

tmux list-sessions        # List sessions

tmux attach               # Attach to last session

tmux attach-session       # Attach to last session

tmux attach -t mysession             # Attach to session 'mysession'

tmux attach-session -t mysession     # Attach to session 'mysession'
\`\`\`

## - Session Shortcuts

\`\`\`bash
Ctrl + b $   # Rename session

Ctrl + b d   # Detach from session

Ctrl + b s   # Show all sessions

Ctrl + b (   # Previous session

Ctrl + b )   # Next session

Ctrl + b w   # Session and Window preview
\`\`\`


## - Windows

\`\`\`bash
tmux new -s mysession -n mywindow   # New session 'mysession' with window 'mywindow'

Ctrl + b c   # Create window

Ctrl + b ,   # Rename current window

Ctrl + b &   # Close current window

Ctrl + b w   # List windows

Ctrl + b p   # Previous window

Ctrl + b n   # Next window

Ctrl + b 0..9 # Switch to window by number

Ctrl + b l   # Toggle last active window

: swap-window -s 2 -t 1  # Swap windows 2 and 1

: swap-window -t -1       # Move window left by one

: move-window -s src_ses:win -t target_ses:win  # Move window to another session

: move-window -r          # Renumber windows to remove gaps
\`\`\`


## - Panes

\`\`\`bash
Ctrl + b ;   # Toggle last active pane

Ctrl + b %   # Split pane vertically

Ctrl + b "   # Split pane horizontally

: join-pane -s 2 -t 1      # Merge window 2 into window 1 as pane

Ctrl + b {   # Move current pane left

Ctrl + b }   # Move current pane right

Ctrl + b o   # Switch to next pane

Ctrl + b q   # Show pane numbers

Ctrl + b q 0..9  # Switch to pane by number

Ctrl + b z   # Toggle pane zoom

Ctrl + b !   # Convert pane into window

Ctrl + b x   # Close current pane
\`\`\`


## - Copy Mode

\`\`\`bash
: setw -g mode-keys vi   # Use vi keys in copy mode

Ctrl + b [               # Enter copy mode

Ctrl + b PgUp     # Enter copy mode and scroll up

q                        # Quit copy mode

g                        # Go to top

G                        # Go to bottom

h,j,k,l        # Move cursor

w,b            # Move forward/back by word

/,?              # Search forward/backward

n,N          # Next/previous search match

Spacebar                 # Start selection

Esc                      # Clear selection

Enter                    # Copy selection

Ctrl + b ]               # Paste buffer

: show-buffer            # Display buffer

: capture-pane     # Copy entire pane to buffer

: list-buffers        # Show all buffers

: choose-buffer   # Choose buffer to paste

: save-buffer buf.txt    # Save buffer to file

: delete-buffer -b 1     # Delete buffer 1
\`\`\`


## - Misc Commands

\`\`\`bash
Ctrl + b :       # Enter command mode

: set -g OPTION  # Set global option

: setw -g OPTION # Set window option

: set mouse on   # Enable mouse mode
\`\`\`


## - Help

\`\`\`bash
tmux list-keys    # List all key bindings

Ctrl + b ?        # Show shortcuts

tmux info   # Show session, window, pane info
\`\`\`
`;

export default function Bash() {
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
          source={require("../assets/Linux.png")}
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
            Linux Commands
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
        {bashMarkdown}
      </Markdown>
    </ScrollView>
  );
}
