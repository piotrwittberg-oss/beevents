import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useAuthStore } from "../state/authStore";
import { useEventsStore } from "../state/eventsStore";
import { Button } from "../components/Button";

export const ProfileScreen = ({ navigation }: any) => {
  const user = useAuthStore(state => state.user);
  const logout = useAuthStore(state => state.logout);
  const transactions = useEventsStore(state => state.transactions);

  const handleLogout = () => {
    logout();
  };

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-gray-900" edges={["top"]}>
      <ScrollView className="flex-1">
        {/* Header */}
        <View className="px-6 py-6 bg-yellow-500">
          <View className="items-center">
            <View className="w-24 h-24 bg-white rounded-full items-center justify-center mb-4">
              <Ionicons name="person" size={48} color="#EAB308" />
            </View>
            <Text className="text-white text-2xl font-bold mb-1">
              {user?.name}
            </Text>
            <Text className="text-yellow-100 text-base mb-1">{user?.email}</Text>
            <Text className="text-yellow-100 text-sm">
              {user?.city} • {user?.age} years old
            </Text>
          </View>
        </View>

        {/* Bee Points Card */}
        <View className="px-6 py-6">
          <View className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl p-6 mb-6">
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-white text-base font-medium mb-1">
                  Total Bee Points
                </Text>
                <Text className="text-white text-4xl font-bold">
                  {user?.beePoints || 0}
                </Text>
              </View>
              <Ionicons name="flash" size={64} color="rgba(255,255,255,0.3)" />
            </View>

            <View className="mt-4 pt-4 border-t border-white/20">
              <Text className="text-yellow-100 text-sm">
                Earn points by creating events, inviting friends, and attending!
              </Text>
            </View>
          </View>

          {/* Stats Grid */}
          <View className="flex-row mb-6">
            <View className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-2xl p-4 mr-2">
              <Ionicons name="calendar" size={24} color="#EAB308" />
              <Text className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
                0
              </Text>
              <Text className="text-gray-600 dark:text-gray-400 text-sm">
                Events Created
              </Text>
            </View>
            <View className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-2xl p-4 ml-2">
              <Ionicons name="people" size={24} color="#EAB308" />
              <Text className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
                0
              </Text>
              <Text className="text-gray-600 dark:text-gray-400 text-sm">
                Events Attended
              </Text>
            </View>
          </View>

          {/* Points History */}
          <View className="mb-6">
            <Text className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Recent Activity
            </Text>

            {transactions.length === 0 ? (
              <View className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 items-center">
                <Ionicons name="time-outline" size={48} color="#D1D5DB" />
                <Text className="text-gray-500 dark:text-gray-400 text-base font-semibold mt-3">
                  No activity yet
                </Text>
                <Text className="text-gray-400 dark:text-gray-500 text-sm text-center mt-1">
                  Start creating or joining events to earn Bee Points!
                </Text>
              </View>
            ) : (
              transactions.slice(0, 5).map((transaction) => (
                <View
                  key={transaction.id}
                  className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 mb-2 flex-row items-center justify-between"
                >
                  <View className="flex-1">
                    <Text className="text-gray-900 dark:text-white font-semibold">
                      {transaction.description}
                    </Text>
                    <Text className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                      {transaction.eventTitle || transaction.type}
                    </Text>
                  </View>
                  <Text
                    className={`font-bold text-lg ${
                      transaction.delta > 0
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {transaction.delta > 0 ? "+" : ""}
                    {transaction.delta}
                  </Text>
                </View>
              ))
            )}
          </View>

          {/* Menu Items */}
          <View className="mb-6">
            <Text className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Settings
            </Text>

            <Pressable className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 mb-2 flex-row items-center justify-between">
              <View className="flex-row items-center">
                <Ionicons name="person-outline" size={24} color="#6B7280" />
                <Text className="text-gray-900 dark:text-white font-semibold ml-3">
                  Edit Profile
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#6B7280" />
            </Pressable>

            <Pressable className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 mb-2 flex-row items-center justify-between">
              <View className="flex-row items-center">
                <Ionicons name="notifications-outline" size={24} color="#6B7280" />
                <Text className="text-gray-900 dark:text-white font-semibold ml-3">
                  Notifications
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#6B7280" />
            </Pressable>

            <Pressable className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 mb-2 flex-row items-center justify-between">
              <View className="flex-row items-center">
                <Ionicons name="shield-checkmark-outline" size={24} color="#6B7280" />
                <Text className="text-gray-900 dark:text-white font-semibold ml-3">
                  Privacy & Safety
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#6B7280" />
            </Pressable>

            <Pressable className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 mb-2 flex-row items-center justify-between">
              <View className="flex-row items-center">
                <Ionicons name="help-circle-outline" size={24} color="#6B7280" />
                <Text className="text-gray-900 dark:text-white font-semibold ml-3">
                  Help & Support
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#6B7280" />
            </Pressable>
          </View>

          {/* Logout Button */}
          <Button
            title="Log Out"
            variant="danger"
            size="lg"
            onPress={handleLogout}
            icon={<Ionicons name="log-out-outline" size={20} color="#fff" />}
          />

          <View className="mt-6 items-center pb-8">
            <Text className="text-gray-400 dark:text-gray-500 text-sm">
              Version 1.0.0
            </Text>
            <Text className="text-gray-400 dark:text-gray-500 text-xs mt-1">
              Made with ❤️ by Bee Team
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
