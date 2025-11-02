import React from "react";
import { TextInput, TextInputProps, View, Text } from "react-native";
import { cn } from "../utils/cn";

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  icon,
  className,
  ...props
}) => {
  return (
    <View className="mb-4">
      {label && (
        <Text className="text-gray-700 dark:text-gray-300 font-semibold mb-2">
          {label}
        </Text>
      )}
      <View className="relative">
        {icon && (
          <View className="absolute left-4 top-0 bottom-0 justify-center z-10">
            {icon}
          </View>
        )}
        <TextInput
          className={cn(
            "bg-gray-100 dark:bg-gray-800 rounded-xl px-4 py-3.5 text-gray-900 dark:text-white",
            icon && "pl-12",
            error && "border-2 border-red-500",
            className
          )}
          placeholderTextColor="#9CA3AF"
          {...props}
        />
      </View>
      {error && (
        <Text className="text-red-500 text-sm mt-1 ml-1">{error}</Text>
      )}
    </View>
  );
};
