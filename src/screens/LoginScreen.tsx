import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView, Platform, ScrollView, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuthStore } from "../state/authStore";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const login = useAuthStore(state => state.login);
  const isLoading = useAuthStore(state => state.isLoading);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = async () => {
    // Reset errors
    setEmailError("");
    setPasswordError("");

    // Validation
    let hasError = false;

    if (!email) {
      setEmailError("Email is required");
      hasError = true;
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email");
      hasError = true;
    }

    if (!password) {
      setPasswordError("Password is required");
      hasError = true;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      hasError = true;
    }

    if (hasError) return;

    try {
      await login(email, password);
    } catch (error) {
      setPasswordError("Invalid email or password");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-gray-900">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          className="flex-1"
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="flex-1 px-6 py-8 justify-center">
            {/* Logo/Icon */}
            <View className="items-center mb-8">
              <View className="w-24 h-24 bg-yellow-500 rounded-3xl items-center justify-center mb-4">
                <Ionicons name="flash" size={48} color="#fff" />
              </View>
              <Text className="text-4xl font-bold text-gray-900 dark:text-white">
                Bee
              </Text>
              <Text className="text-gray-600 dark:text-gray-400 text-base mt-2">
                Meet people, make memories
              </Text>
            </View>

            {/* Form */}
            <View className="mb-6">
              <Input
                label="Email"
                placeholder="Enter your email"
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                  setEmailError("");
                }}
                error={emailError}
                keyboardType="email-address"
                autoCapitalize="none"
                icon={<Ionicons name="mail-outline" size={20} color="#6B7280" />}
              />

              <Input
                label="Password"
                placeholder="Enter your password"
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                  setPasswordError("");
                }}
                error={passwordError}
                secureTextEntry
                icon={<Ionicons name="lock-closed-outline" size={20} color="#6B7280" />}
              />

              <Pressable className="self-end mb-6">
                <Text className="text-yellow-600 dark:text-yellow-400 font-semibold">
                  Forgot Password?
                </Text>
              </Pressable>

              <Button
                title="Log In"
                onPress={handleLogin}
                loading={isLoading}
                size="lg"
                className="mb-4"
              />

              {/* Divider */}
              <View className="flex-row items-center my-6">
                <View className="flex-1 h-px bg-gray-300 dark:bg-gray-700" />
                <Text className="px-4 text-gray-500 dark:text-gray-400">or</Text>
                <View className="flex-1 h-px bg-gray-300 dark:bg-gray-700" />
              </View>

              {/* Social Login Options */}
              <Button
                title="Continue with Google"
                variant="outline"
                size="lg"
                className="mb-3"
                icon={<Ionicons name="logo-google" size={20} color="#EAB308" />}
                onPress={() => {}}
              />

              <Button
                title="Continue with Phone"
                variant="secondary"
                size="lg"
                icon={<Ionicons name="call-outline" size={20} color="#1F2937" />}
                onPress={() => {}}
              />
            </View>

            {/* Sign Up Link */}
            <View className="flex-row justify-center items-center mt-4">
              <Text className="text-gray-600 dark:text-gray-400">
                {"Don't have an account? "}
              </Text>
              <Pressable onPress={() => navigation.navigate("Register")}>
                <Text className="text-yellow-600 dark:text-yellow-400 font-bold">
                  Sign Up
                </Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
