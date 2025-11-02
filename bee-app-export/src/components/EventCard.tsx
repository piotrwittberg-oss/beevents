import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Event } from "../types";
import { format } from "date-fns";

interface EventCardProps {
  event: Event;
  onPress: () => void;
}

export const EventCard: React.FC<EventCardProps> = ({ event, onPress }) => {
  const isUpcoming = new Date(event.startDate) > new Date();
  const isBoosted = event.isBoosted && event.boostedUntil && new Date(event.boostedUntil) > new Date();

  return (
    <Pressable
      onPress={onPress}
      className="bg-white dark:bg-gray-800 rounded-2xl mb-4 overflow-hidden shadow-sm active:opacity-80"
    >
      {/* Boosted Badge */}
      {isBoosted && (
        <View className="absolute top-3 right-3 z-10 bg-yellow-500 px-3 py-1 rounded-full flex-row items-center">
          <Ionicons name="flash" size={14} color="#fff" />
          <Text className="text-white text-xs font-bold ml-1">BOOSTED</Text>
        </View>
      )}

      {/* Image */}
      {event.photoUrl ? (
        <Image
          source={{ uri: event.photoUrl }}
          className="w-full h-48"
          resizeMode="cover"
        />
      ) : (
        <View className="w-full h-48 bg-gray-200 dark:bg-gray-700 items-center justify-center">
          <Ionicons
            name={event.category.icon as any}
            size={64}
            color="#9CA3AF"
          />
        </View>
      )}

      {/* Content */}
      <View className="p-4">
        {/* Category & 18+ Badge */}
        <View className="flex-row items-center mb-2">
          <View
            className="px-3 py-1 rounded-full mr-2"
            style={{ backgroundColor: event.category.color || "#6B7280" }}
          >
            <Text className="text-white text-xs font-semibold">
              {event.category.name}
            </Text>
          </View>
          {event.is18Plus && (
            <View className="bg-red-500 px-2 py-1 rounded-full">
              <Text className="text-white text-xs font-bold">18+</Text>
            </View>
          )}
        </View>

        {/* Title */}
        <Text className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {event.title}
        </Text>

        {/* Description */}
        <Text
          className="text-gray-600 dark:text-gray-400 text-sm mb-3"
          numberOfLines={2}
        >
          {event.description}
        </Text>

        {/* Info Grid */}
        <View className="space-y-2">
          {/* Date & Time */}
          <View className="flex-row items-center">
            <Ionicons name="calendar-outline" size={16} color="#6B7280" />
            <Text className="text-gray-700 dark:text-gray-300 text-sm ml-2">
              {format(new Date(event.startDate), "EEE, MMM d, yyyy • h:mm a")}
            </Text>
          </View>

          {/* Location */}
          <View className="flex-row items-center">
            <Ionicons name="location-outline" size={16} color="#6B7280" />
            <Text
              className="text-gray-700 dark:text-gray-300 text-sm ml-2 flex-1"
              numberOfLines={1}
            >
              {event.location.address}
            </Text>
          </View>

          {/* Attendees */}
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <Ionicons name="people-outline" size={16} color="#6B7280" />
              <Text className="text-gray-700 dark:text-gray-300 text-sm ml-2">
                {event.attendeesCount} {event.attendeesCount === 1 ? "person" : "people"}
                {event.capacity && ` / ${event.capacity}`}
              </Text>
            </View>

            {/* Organizer */}
            <View className="flex-row items-center">
              <Ionicons name="person-outline" size={14} color="#6B7280" />
              <Text className="text-gray-600 dark:text-gray-400 text-xs ml-1">
                {event.ownerName}
              </Text>
            </View>
          </View>
        </View>

        {/* Status Badge */}
        {!isUpcoming && event.status === "completed" && (
          <View className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
            <Text className="text-gray-500 dark:text-gray-400 text-xs font-semibold">
              COMPLETED
            </Text>
          </View>
        )}
      </View>
    </Pressable>
  );
};
