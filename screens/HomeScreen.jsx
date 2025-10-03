import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView 
      style={{ flex: 1, backgroundColor: "#000" }} 
      contentContainerStyle={{ alignItems: "center", padding: 20 }}
    >
      {/* Hero Badge */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#111",
          borderRadius: 50,
          paddingHorizontal: 16,
          paddingVertical: 8,
          marginBottom: 20,
          borderWidth: 1,
          borderColor: "#26a269",
        }}
      >
        <MaterialCommunityIcons name="star-four-points" size={18} color="#26a269" />
        <Text style={{ color: "#fff", marginLeft: 8, fontSize: 12 }}>
          Developer CheatSheets & Commands
        </Text>
      </View>

      {/* Logo */}
      <Image
        source={require("../assets/DevSheets.png")}
        style={{
          width: 250,
          height: 150,
          resizeMode: "contain",
          marginBottom: 20,
        }}
      />

      {/* Title */}
      <Text
        style={{
          fontSize: 40,
          fontWeight: "bold",
          color: "#26a269",
          textAlign: "center",
        }}
      >
        DevSheets
      </Text>
      <Text
        style={{
          fontSize: 22,
          color: "#fff",
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        Quick Access to Git, tmux, Linux Commands
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
            borderColor: "#26a269",
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
          <MaterialCommunityIcons name="layers-triple" size={24} color="#26a269" />
          <Text style={{ color: "#fff", marginLeft: 12, fontSize: 16 }}>
            tmux Shortcuts
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
