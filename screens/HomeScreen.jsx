import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView 
      style={{ flex: 1, backgroundColor: "#000" }} 
      contentContainerStyle={{ alignItems: "center", padding: 20 }}
    >

      <Image
        source={require("../assets/DevSheets.png")}
        style={{
          width: 250,
          height: 150,
          resizeMode: "contain",
          marginTop: 10,
          marginBottom: 10,
        }}
      />

      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "#26a269",
          textAlign: "center",
          marginBottom: 10,
        }}
      >
        Welcome to DevSheets
      </Text>
      <Text
        style={{
          fontSize: 20,
          color: "#fff",
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        Your developer cheat sheet, always in your pocket
      </Text>

      {/* Description */}
      <Text
        style={{
          fontSize: 16,
          color: "#aaa",
          textAlign: "center",
          marginBottom: 30,
          maxWidth: 320,
        }}
      >
        Learn, explore, and use developer commands instantly. Perfect for
        Computer Science students & software engineers.
      </Text>

      {/* Feature Cards */}
      <View style={{ width: "100%", marginBottom: 30 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#111",
            padding: 16,
            borderRadius: 12,
            marginBottom: 12,
            borderColor: "#00ff88",
            borderWidth: 1,
          }}
        >
          <MaterialCommunityIcons name="git" size={24} color="#26a269" />
          <Text style={{ color: "#fff", marginLeft: 12, fontSize: 16 }}>
            Git CheatSheet
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#111",
            padding: 16,
            borderRadius: 12,
            marginBottom: 12,
            borderColor: "#26a269",
            borderWidth: 1,
          }}
        >
          <MaterialCommunityIcons name="console" size={24} color="#26a269" />
          <Text style={{ color: "#fff", marginLeft: 12, fontSize: 16 }}>
            Linux Commands
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#111",
            padding: 16,
            borderRadius: 12,
            marginBottom: 12,
            borderColor: "#26a269",
            borderWidth: 1,
          }}
        >
          <MaterialCommunityIcons name="docker" size={24} color="#26a269" />
          <Text style={{ color: "#fff", marginLeft: 12, fontSize: 16 }}>
            Docker
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#111",
            padding: 16,
            borderRadius: 12,
            marginBottom: 12,
            borderColor: "#26a269",
            borderWidth: 1,
          }}
        >
          <MaterialCommunityIcons name="bash" size={24} color="#26a269" />
          <Text style={{ color: "#fff", marginLeft: 12, fontSize: 16 }}>
            Bash
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
