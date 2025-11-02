import React from "react";
import { Pressable, Text, ActivityIndicator, PressableProps } from "react-native";
import { cn } from "../utils/cn";

interface ButtonProps extends PressableProps {
  title: string;
  variant?: "primary" | "secondary" | "outline" | "danger";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  icon,
  className,
  ...props
}) => {
  const baseStyles = "rounded-xl items-center justify-center flex-row";

  const variantStyles = {
    primary: "bg-yellow-500 active:bg-yellow-600",
    secondary: "bg-gray-200 dark:bg-gray-700 active:bg-gray-300 dark:active:bg-gray-600",
    outline: "border-2 border-yellow-500 bg-transparent active:bg-yellow-50 dark:active:bg-yellow-900/20",
    danger: "bg-red-500 active:bg-red-600",
  };

  const sizeStyles = {
    sm: "px-4 py-2",
    md: "px-6 py-3",
    lg: "px-8 py-4",
  };

  const textVariantStyles = {
    primary: "text-white font-semibold",
    secondary: "text-gray-900 dark:text-white font-semibold",
    outline: "text-yellow-600 dark:text-yellow-400 font-semibold",
    danger: "text-white font-semibold",
  };

  const textSizeStyles = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  const isDisabled = disabled || loading;

  return (
    <Pressable
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        isDisabled && "opacity-50",
        className
      )}
      disabled={isDisabled}
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === "outline" ? "#EAB308" : "#fff"}
          size="small"
        />
      ) : (
        <>
          {icon && <>{icon}</>}
          <Text
            className={cn(
              textVariantStyles[variant],
              textSizeStyles[size],
              icon && "ml-2"
            )}
          >
            {title}
          </Text>
        </>
      )}
    </Pressable>
  );
};
