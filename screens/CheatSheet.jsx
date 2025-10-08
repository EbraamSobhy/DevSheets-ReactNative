import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { FontAwesome, MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";

export default function CheatSheet({ navigation }) {
  return (
    <ScrollView 
      style={{ flex: 1, backgroundColor: "#000" }} 
      contentContainerStyle={{ alignItems: "center", padding: 20 }}
    >

      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "#26a269",
          textAlign: "center",
          marginBottom: 30,
        }}
      >
        DevSheets
      </Text>
     
      {/* Git */}
      <View style={{ width: "100%", marginBottom: 30 }}>
        <TouchableOpacity
        onPress={() => navigation.navigate("Git")}
        activeOpacity={0.8}
      >
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
            Git
          </Text>
        </View>
        </TouchableOpacity>

      {/* Linux */}
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
          <FontAwesome name="linux" size={24} color="#26a269" />
          <Text style={{ color: "#fff", marginLeft: 12, fontSize: 16 }}>
            Linux
          </Text>
        </View>

      {/* Docker */}
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

        {/* Bash */}
        <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Bash")}
          activeOpacity={0.8}
        >
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
        <Image
            source={require("../assets/Bash.png")}
            style={{
            width: 35,
            height: 25,
            resizeMode: "contain",
            tintColor: "#26a269"
          }}
        />
          <Text style={{ color: "#fff", marginLeft: 8, fontSize: 16 }}>
            Bash
          </Text>
        </View>
        </TouchableOpacity>
      </View>

      {/* Gemini */}
        <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Gemini")}
          activeOpacity={0.8}
        >
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
        <Image
            source={require("../assets/Gemini.png")}
            style={{
            width: 35,
            height: 25,
            resizeMode: "contain",
            tintColor: "#26a269"
          }}
        />
          <Text style={{ color: "#fff", marginLeft: 8, fontSize: 16 }}>
            Gemini CLI
          </Text>
        </View>
        </TouchableOpacity>
      </View>

      {/* GitHub */}
        <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("GitHub")}
          activeOpacity={0.8}
        >
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
        <MaterialCommunityIcons name="github" size={24} color="#26a269" />

          <Text style={{ color: "#fff", marginLeft: 20, fontSize: 16 }}>
            GitHub CLI
          </Text>
        </View>
        </TouchableOpacity>
      </View>
        
        {/* IDE */}
        <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("IDE")}
          activeOpacity={0.8}
        >
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
        <Image
            source={require("../assets/VSCode.png")}
            style={{
            width: 35,
            height: 25,
            resizeMode: "contain",
            tintColor: "#26a269"
          }}
        />
          <Text style={{ color: "#fff", marginLeft: 12, fontSize: 16 }}>
            Integrated Development Environments
          </Text>
        </View>
        </TouchableOpacity>
      </View>

        {/* OS */}
        <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("OS")}
          activeOpacity={0.8}
        >
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
          <FontAwesome name="windows" size={24} color="#26a269" />
          <Text style={{ color: "#fff", marginLeft: 20, fontSize: 16 }}>
            Operating systems (OS)
          </Text>
        </View>
        </TouchableOpacity>
      </View>

      </View>
    </ScrollView>
  );
}
