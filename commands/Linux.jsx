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
cd       # Navigate through files and dir

cd -     # Move to your previous directory

cd ..    # Move one directory up

pwd      # Show your current directory
\`\`\`

## - Directory Management

\`\`\`bash
mkdir [name]  # Create a new directory

rmdir         # Delete a directory
\`\`\`


## - Disk & Storage Usage

\`\`\`bash
df             # Report disk space usage

fdisk -l       # Show disk partitions

du             # Check disk space usage 

du -ah         # Show disk usage files and directory

du -sh         # Show disk usage of the current directory

findmnt        # Show target mount points for all filesystems
\`\`\`


## - Listing & File Viewing

\`\`\`bash
ls             # List files in a director

ls -a          # List hidden files

ls -R          # List files in subdir

ls -al         # Detailed file list

cat file1 file2 > file3  # Merge files

cat filename          # Show file content

touch filename        # Create file

cat filename | tr a-z A-Z > output.txt  # Convert case

diff                  # Compare two files

tar                   # Archive files

tar xf file.tar       # Extract archive

tar cf file.tar file  # Create tar archive

tar czf file.tar.gz   # Create gzip archive

chmod        # Change file permissions

chown        # Change file ownership
\`\`\`


## - File Operations

\`\`\`bash
rm file      # Remove file

rm -r dir   # Remove directory recursively

rm -rf dir       # Force-delete directory

cp file1 file2        # Copy file

cp -r dir1 dir2       # Copy directory

mv file1 file2        # Rename file

mv                  # Move or rename files

touch file            # Create new file

wc                  # Word/line/byte count

tail file             # Show last 10 lines

head file             # First 10 lines

more file             # View file

gzip file             # Compress file

gpg -c file           # Encrypt file

gpg file.gpg          # Decrypt file

wget             # Download from internet

locate                # Search files

find            # Locate files recursively

ln -s /path/to/file link    # Create symbolic link
\`\`\`


## - System Management
 
\`\`\`bash
sudo                  # Run as superuser

jobs                  # List jobs

kill                  # Terminate program

ps                # Show active processes

top            # Monitor system resources

history        # Show command history

man                 # Open command manual

echo                  # Output text

zip                   # Create zip archive

unzip               # Extract zip archive
\`\`\`


## - Networking & System Info

\`\`\`bash
ping                  # Test connectivity

uname                 # Show system info

uname -r              # Kernel info

hostname              # Show host name

hostname -i           # Show system IP

ip addr show          # Show IP addresses

ifconfig         # Show network interfaces


netstat -pnltu        # Show active ports

netstat -nutlp     # Detailed network info

whois domain          # Domain info

dig domain            # DNS lookup

host domain           # IP lookup
\`\`\`


## - System & User Management

\`\`\`bash
last reboot           # Reboot history

uptime                # System uptime

date                  # Current time/date

timedatectl        # Manage system clock

id                    # User info

passwd              # Change user password

useradd               # Add user

userdel username      # Delete user

last                  # Login history
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
