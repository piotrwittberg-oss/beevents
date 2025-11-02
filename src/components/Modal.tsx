import React from "react";
import { Modal, View, Text, Pressable, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { cn } from "../utils/cn";

interface ModalComponentProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

export const ModalComponent: React.FC<ModalComponentProps> = ({
  visible,
  onClose,
  title,
  children,
  size = "md",
}) => {
  const sizeStyles = {
    sm: "w-[80%]",
    md: "w-[90%]",
    lg: "w-[95%]",
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View className="flex-1 bg-black/50 justify-center items-center p-4">
        <View className={cn("bg-white dark:bg-gray-900 rounded-2xl max-h-[80%]", sizeStyles[size])}>
          {/* Header */}
          <View className="flex-row items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <Text className="text-xl font-bold text-gray-900 dark:text-white flex-1">
              {title}
            </Text>
            <Pressable
              onPress={onClose}
              className="w-8 h-8 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 active:bg-gray-200 dark:active:bg-gray-700"
            >
              <Ionicons name="close" size={20} color="#6B7280" />
            </Pressable>
          </View>

          {/* Content */}
          <ScrollView className="p-4">{children}</ScrollView>
        </View>
      </View>
    </Modal>
  );
};
