import React, { useState } from "react";
import { View, Text, ScrollView, Pressable, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { format } from "date-fns";
import { useAuthStore } from "../state/authStore";
import { useEventsStore } from "../state/eventsStore";
import { Button } from "../components/Button";
import { ModalComponent } from "../components/Modal";
import { Event } from "../types";

export const EventDetailsScreen = ({ route, navigation }: any) => {
  const { event: initialEvent } = route.params;
  const user = useAuthStore(state => state.user);
  const events = useEventsStore(state => state.events);
  const joinEvent = useEventsStore(state => state.joinEvent);
  const leaveEvent = useEventsStore(state => state.leaveEvent);
  const boostEvent = useEventsStore(state => state.boostEvent);
  const addTransaction = useEventsStore(state => state.addTransaction);
  const addBeePoints = useAuthStore(state => state.addBeePoints);
  const spendBeePoints = useAuthStore(state => state.spendBeePoints);

  const [showBoostModal, setShowBoostModal] = useState(false);

  // Get latest event data
  const event = events.find(e => e.id === initialEvent.id) || initialEvent;
  const isAttending = user ? event.attendees.includes(user.id) : false;
  const isOwner = user?.id === event.ownerId;
  const isFull = event.capacity ? event.attendeesCount >= event.capacity : false;

  const handleJoinEvent = () => {
    if (!user) return;

    if (event.is18Plus && !user.is18Plus) {
      return;
    }

    if (isAttending) {
      leaveEvent(event.id, user.id);
    } else {
      joinEvent(event.id, user.id);
      // Award point for attending
      addBeePoints(1);
      addTransaction({
        id: "tx_" + Date.now(),
        userId: user.id,
        type: "attend",
        delta: 1,
        eventId: event.id,
        eventTitle: event.title,
        createdAt: new Date(),
        description: "Joined an event",
      });
    }
  };

  const handleBoost = (hours: number) => {
    if (!user) return;

    const cost = hours === 24 ? 20 : 35;
    const success = spendBeePoints(cost);

    if (success) {
      boostEvent(event.id, hours);
      addTransaction({
        id: "tx_" + Date.now(),
        userId: user.id,
        type: "boost",
        delta: -cost,
        eventId: event.id,
        eventTitle: event.title,
        createdAt: new Date(),
        description: `Boosted event for ${hours}h`,
      });
      setShowBoostModal(false);
    }
  };

  const renderBoostModal = () => (
    <ModalComponent
      visible={showBoostModal}
      onClose={() => setShowBoostModal(false)}
      title="Boost Event"
    >
      <View>
        <Text className="text-gray-600 dark:text-gray-400 mb-6">
          Boost your event to appear at the top of lists and send push notifications to nearby users!
        </Text>

        <Pressable
          onPress={() => handleBoost(24)}
          className="bg-yellow-500 rounded-xl p-4 mb-3 active:bg-yellow-600"
        >
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-white font-bold text-lg">24 Hours</Text>
              <Text className="text-yellow-100 text-sm">Featured for 1 day</Text>
            </View>
            <View className="bg-white/20 px-3 py-1.5 rounded-full">
              <Text className="text-white font-bold">20 Points</Text>
            </View>
          </View>
        </Pressable>

        <Pressable
          onPress={() => handleBoost(48)}
          className="bg-yellow-600 rounded-xl p-4 active:bg-yellow-700"
        >
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-white font-bold text-lg">48 Hours</Text>
              <Text className="text-yellow-100 text-sm">Featured for 2 days</Text>
            </View>
            <View className="bg-white/20 px-3 py-1.5 rounded-full">
              <Text className="text-white font-bold">35 Points</Text>
            </View>
          </View>
        </Pressable>

        <View className="mt-4 p-3 bg-gray-100 dark:bg-gray-800 rounded-xl">
          <Text className="text-gray-600 dark:text-gray-400 text-sm">
            Your current balance: <Text className="font-bold">{user?.beePoints || 0} Bee Points</Text>
          </Text>
        </View>
      </View>
    </ModalComponent>
  );

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-gray-900" edges={["top"]}>
      <ScrollView className="flex-1">
        {/* Header Image */}
        {event.photoUrl ? (
          <Image
            source={{ uri: event.photoUrl }}
            className="w-full h-64"
            resizeMode="cover"
          />
        ) : (
          <View className="w-full h-64 bg-gray-200 dark:bg-gray-800 items-center justify-center">
            <Ionicons name={event.category.icon as any} size={80} color="#9CA3AF" />
          </View>
        )}

        {/* Back Button */}
        <Pressable
          onPress={() => navigation.goBack()}
          className="absolute top-4 left-4 w-10 h-10 bg-white dark:bg-gray-900 rounded-full items-center justify-center"
          style={{ elevation: 5 }}
        >
          <Ionicons name="arrow-back" size={24} color="#1F2937" />
        </Pressable>

        {/* Boosted Badge */}
        {event.isBoosted && event.boostedUntil && new Date(event.boostedUntil) > new Date() && (
          <View className="absolute top-4 right-4 bg-yellow-500 px-3 py-1.5 rounded-full flex-row items-center">
            <Ionicons name="flash" size={16} color="#fff" />
            <Text className="text-white text-sm font-bold ml-1">BOOSTED</Text>
          </View>
        )}

        {/* Content */}
        <View className="px-6 py-6">
          {/* Category & 18+ Badge */}
          <View className="flex-row items-center mb-4">
            <View
              className="px-3 py-1.5 rounded-full mr-2"
              style={{ backgroundColor: event.category.color || "#6B7280" }}
            >
              <Text className="text-white text-sm font-bold">
                {event.category.name}
              </Text>
            </View>
            {event.is18Plus && (
              <View className="bg-red-500 px-3 py-1.5 rounded-full">
                <Text className="text-white text-sm font-bold">18+</Text>
              </View>
            )}
          </View>

          {/* Title */}
          <Text className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {event.title}
          </Text>

          {/* Organizer */}
          <View className="flex-row items-center mb-6">
            <Ionicons name="person-circle" size={32} color="#EAB308" />
            <View className="ml-2">
              <Text className="text-gray-500 dark:text-gray-400 text-xs">
                Organized by
              </Text>
              <Text className="text-gray-900 dark:text-white font-semibold">
                {event.ownerName}
              </Text>
            </View>
          </View>

          {/* Info Cards */}
          <View className="mb-6 space-y-3">
            <View className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 flex-row items-center">
              <View className="w-10 h-10 bg-yellow-500 rounded-full items-center justify-center mr-3">
                <Ionicons name="calendar" size={20} color="#fff" />
              </View>
              <View>
                <Text className="text-gray-500 dark:text-gray-400 text-xs">
                  Date & Time
                </Text>
                <Text className="text-gray-900 dark:text-white font-semibold">
                  {format(new Date(event.startDate), "EEE, MMM d, yyyy")}
                </Text>
                <Text className="text-gray-900 dark:text-white font-semibold">
                  {format(new Date(event.startDate), "h:mm a")} - {format(new Date(event.endDate), "h:mm a")}
                </Text>
              </View>
            </View>

            <View className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 flex-row items-center">
              <View className="w-10 h-10 bg-yellow-500 rounded-full items-center justify-center mr-3">
                <Ionicons name="location" size={20} color="#fff" />
              </View>
              <View className="flex-1">
                <Text className="text-gray-500 dark:text-gray-400 text-xs">
                  Location
                </Text>
                <Text className="text-gray-900 dark:text-white font-semibold">
                  {event.location.address}
                </Text>
                <Text className="text-gray-600 dark:text-gray-400 text-sm">
                  {event.location.city}
                </Text>
              </View>
              <Pressable className="w-10 h-10 bg-yellow-500 rounded-full items-center justify-center">
                <Ionicons name="navigate" size={20} color="#fff" />
              </Pressable>
            </View>

            <View className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 flex-row items-center">
              <View className="w-10 h-10 bg-yellow-500 rounded-full items-center justify-center mr-3">
                <Ionicons name="people" size={20} color="#fff" />
              </View>
              <View>
                <Text className="text-gray-500 dark:text-gray-400 text-xs">
                  Attendees
                </Text>
                <Text className="text-gray-900 dark:text-white font-semibold">
                  {event.attendeesCount} {event.attendeesCount === 1 ? "person" : "people"} going
                  {event.capacity && ` (Max: ${event.capacity})`}
                </Text>
              </View>
            </View>
          </View>

          {/* Description */}
          <View className="mb-6">
            <Text className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              About
            </Text>
            <Text className="text-gray-700 dark:text-gray-300 leading-6">
              {event.description}
            </Text>
          </View>

          {/* Actions */}
          <View className="space-y-3 mb-8">
            {!isOwner ? (
              <>
                {event.is18Plus && !user?.is18Plus ? (
                  <View className="bg-red-50 dark:bg-red-900/20 border-2 border-red-500 rounded-xl p-4">
                    <Text className="text-red-700 dark:text-red-400 font-semibold text-center">
                      This event is for adults only (18+)
                    </Text>
                  </View>
                ) : (
                  <Button
                    title={isAttending ? "Leave Event" : isFull ? "Event Full" : "Join Event (+1 Point)"}
                    variant={isAttending ? "danger" : "primary"}
                    size="lg"
                    onPress={handleJoinEvent}
                    disabled={!isAttending && isFull}
                    icon={
                      <Ionicons
                        name={isAttending ? "close-circle" : "checkmark-circle"}
                        size={20}
                        color="#fff"
                      />
                    }
                  />
                )}
              </>
            ) : (
              <>
                <Button
                  title="Boost Event"
                  variant="primary"
                  size="lg"
                  onPress={() => setShowBoostModal(true)}
                  icon={<Ionicons name="flash" size={20} color="#fff" />}
                />
                <Button
                  title="Edit Event"
                  variant="secondary"
                  size="lg"
                  icon={<Ionicons name="create-outline" size={20} color="#1F2937" />}
                />
              </>
            )}
          </View>
        </View>
      </ScrollView>

      {renderBoostModal()}
    </SafeAreaView>
  );
};
