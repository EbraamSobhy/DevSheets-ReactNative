import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";

export default function HomeScreen({ navigation }) {
  const tips = [
  "Write code for humans first, computers second.",
  "Read other people's code — it's one of the fastest ways to improve.",
  "Before optimizing, make it work. Then make it fast.",
  "Good naming is better than long documentation.",
  "Learn to debug — it’s your real superpower.",
  "Automate repetitive tasks; your future self will thank you.",
  "Version control is not optional — commit often and meaningfully.",
  "Don’t chase every new framework; master the fundamentals instead.",
  "Always ask 'why' before writing a single line of code.",
  "Write tests, not excuses.",
  "Technical debt is easy to create and hard to pay off — be intentional.",
  "Comment why, not what.",
  "Focus on solving problems, not writing code.",
  "Mentor others — teaching makes you a better engineer.",
  "Learn to say 'no' when quality is at stake.",
  "Code reviews are not personal — they’re for growth.",
  "Never stop learning; technology evolves daily.",
  "Balance your time between coding and design thinking.",
  "Understand the system before fixing the symptom.",
  "Be kind — great teams build great software.",
];

  const [tip, setTip] = useState("");

  useEffect(() => {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    setTip(randomTip);
  }, []);

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#000" }}
      contentContainerStyle={{ alignItems: "center", padding: 20 }}
    >
      {/* Logo */}
      <Image
        source={require("../assets/DevSheets.png")}
        style={{
          width: 250,
          height: 150,
          resizeMode: "contain",
          marginTop: 50,
          marginBottom: 10,
        }}
      />

      {/* Welcome Text */}
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
        Learn, explore, and use developer commands instantly for Automation. Perfect for
        Computer Science students & software engineers.
      </Text>

      {/* Daily Tip Section */}
      <View
        style={{
          backgroundColor: "#26a269",
          borderRadius: 12,
          padding: 20,
          borderColor: "#FFFFFF",
          borderWidth: 3,
          width: "100%",
          marginBottom: 30,
        }}
      >
        <Text
          style={{
            color: "#000000",
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          👨🏻‍💻 Daily Developer Advices
        </Text>
        <Text
          style={{
            color: "#fff",
            fontSize: 16,
            lineHeight: 22,
            fontWeight: "bold"
          }}
        >
          {tip}
        </Text>
      </View>
    </ScrollView>
  );
}
