import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView, Platform, ScrollView, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuthStore } from "../state/authStore";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export const RegisterScreen = ({ navigation }: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [cityError, setCityError] = useState("");

  const register = useAuthStore(state => state.register);
  const isLoading = useAuthStore(state => state.isLoading);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRegister = async () => {
    // Reset errors
    setNameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
    setAgeError("");
    setCityError("");

    let hasError = false;

    // Validation
    if (!name.trim()) {
      setNameError("Name is required");
      hasError = true;
    }

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

    if (!confirmPassword) {
      setConfirmPasswordError("Please confirm your password");
      hasError = true;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      hasError = true;
    }

    if (!age) {
      setAgeError("Age is required");
      hasError = true;
    } else if (isNaN(Number(age)) || Number(age) < 13 || Number(age) > 120) {
      setAgeError("Please enter a valid age (13-120)");
      hasError = true;
    }

    if (!city.trim()) {
      setCityError("City is required");
      hasError = true;
    }

    if (hasError) return;

    try {
      await register(email, password, name.trim(), Number(age), city.trim());
    } catch (error) {
      setEmailError("Registration failed. Please try again.");
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
          contentContainerStyle={{ paddingBottom: 40 }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="px-6 py-8">
            {/* Header */}
            <View className="items-center mb-8">
              <View className="w-20 h-20 bg-yellow-500 rounded-3xl items-center justify-center mb-3">
                <Ionicons name="flash" size={40} color="#fff" />
              </View>
              <Text className="text-3xl font-bold text-gray-900 dark:text-white">
                Create Account
              </Text>
              <Text className="text-gray-600 dark:text-gray-400 text-base mt-2">
                Join Bee and start connecting
              </Text>
            </View>

            {/* Form */}
            <Input
              label="Full Name"
              placeholder="Enter your name"
              value={name}
              onChangeText={(text) => {
                setName(text);
                setNameError("");
              }}
              error={nameError}
              icon={<Ionicons name="person-outline" size={20} color="#6B7280" />}
            />

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
              placeholder="Create a password"
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                setPasswordError("");
              }}
              error={passwordError}
              secureTextEntry
              icon={<Ionicons name="lock-closed-outline" size={20} color="#6B7280" />}
            />

            <Input
              label="Confirm Password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChangeText={(text) => {
                setConfirmPassword(text);
                setConfirmPasswordError("");
              }}
              error={confirmPasswordError}
              secureTextEntry
              icon={<Ionicons name="lock-closed-outline" size={20} color="#6B7280" />}
            />

            <Input
              label="Age"
              placeholder="Enter your age"
              value={age}
              onChangeText={(text) => {
                setAge(text);
                setAgeError("");
              }}
              error={ageError}
              keyboardType="numeric"
              icon={<Ionicons name="calendar-outline" size={20} color="#6B7280" />}
            />

            <Input
              label="City"
              placeholder="Enter your city"
              value={city}
              onChangeText={(text) => {
                setCity(text);
                setCityError("");
              }}
              error={cityError}
              icon={<Ionicons name="location-outline" size={20} color="#6B7280" />}
            />

            <View className="mb-6">
              <Text className="text-gray-600 dark:text-gray-400 text-sm leading-5">
                {"By signing up, you agree to our Terms of Service and Privacy Policy"}
              </Text>
            </View>

            <Button
              title="Create Account"
              onPress={handleRegister}
              loading={isLoading}
              size="lg"
              className="mb-6"
            />

            {/* Sign In Link */}
            <View className="flex-row justify-center items-center">
              <Text className="text-gray-600 dark:text-gray-400">
                Already have an account?{" "}
              </Text>
              <Pressable onPress={() => navigation.navigate("Login")}>
                <Text className="text-yellow-600 dark:text-yellow-400 font-bold">
                  Log In
                </Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
