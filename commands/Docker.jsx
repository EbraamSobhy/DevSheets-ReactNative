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
docker ps       # List running containers

docker ps -a    # List all containers

docker run <image>     # Run container

docker run -it <image> # Interactive mode

docker run -d <image>  # Detached mode

docker run --name <name><image> # Run name

docker start <container> # Start container

docker stop <container>   # Stop container

docker rm <container> # Remove container

docker restart <container> # Restart container
\`\`\`

---

## -  Container Inspection & Management

\`\`\`bash
docker exec -it <container> # Access container shell

docker logs <container>     # View logs

docker inspect <container>  # Detailed info

docker rename <old_name> <new_name>  # Rename container

docker pause <container>    # Pause container

docker unpause <container>  # Unpause container

docker cp <container>:<path> <destination>  # Copy files
\`\`\`

---

## - Volumes (Data Persistence)

\`\`\`bash
ping google.com    # Test connection

ifconfig        # Show network interfaces

curl <url>         # Fetch data from a URL

wget <url>         # Download file URL
\`\`\`

---

## - Networks

\`\`\`bash
docker network ls          # List networks

docker network create <name> # Create network

docker network inspect <name>  # Inspect a network

docker network rm <name>       # Remove a network

docker network connect <network> <container>     # Connect container to network

docker network disconnect <network> <container>  # Disconnect container from network
\`\`\`

---

## - Building & Managing Images

\`\`\`bash
docker build -t <name> .  # Build an image from Dockerfile

docker history <image>    # Show image history

docker commit <container> <new_image>  # Create new image from container
\`\`\`

---

## - System Cleanup & Maintenance

\`\`\`bash
docker system prune    # Remove unused containers, networks, images

docker container prune # Remove all stopped containers

docker image prune     # Remove unused images

docker volume prune    # Remove unused volumes

docker network prune   # Remove unused networks
\`\`\`

---

## - Application Deployment

\`\`\`bash
# Build and run a container
docker build -t my-frontend-app .
docker run -p 3000:3000 my-frontend-app

# Update and redeploy
docker build -t my-express-app .
docker stop <container_id>
docker rm <container_id>
docker run -d -p 3000:3000 my-express-app
\`\`\`

---

## - Docker Hub

\`\`\`bash
docker login         # Login to Docker Hub

docker tag <image> <username>/<image>  # Tag image for Docker Hub

docker push <username>/<image>  # Push image to Docker Hub
\`\`\`

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
