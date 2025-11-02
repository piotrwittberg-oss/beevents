import React, { useState } from "react";
import { View, Text, ScrollView, Pressable, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Ionicons } from "@expo/vector-icons";
import { useAuthStore } from "../state/authStore";
import { useEventsStore } from "../state/eventsStore";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { ModalComponent } from "../components/Modal";
import { EVENT_CATEGORIES } from "../data/categories";
import { Event, EventCategory } from "../types";

export const CreateEventScreen = ({ navigation }: any) => {
  const user = useAuthStore(state => state.user);
  const addEvent = useEventsStore(state => state.addEvent);
  const addTransaction = useEventsStore(state => state.addTransaction);
  const addBeePoints = useAuthStore(state => state.addBeePoints);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<EventCategory | null>(null);
  const [is18Plus, setIs18Plus] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date(Date.now() + 3600000));
  const [capacity, setCapacity] = useState("");
  const [address, setAddress] = useState("");
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [datePickerMode, setDatePickerMode] = useState<"start" | "end">("start");

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    category: "",
    address: "",
  });

  const handleCreateEvent = () => {
    // Reset errors
    setErrors({ title: "", description: "", category: "", address: "" });

    // Validation
    let hasError = false;

    if (!title.trim()) {
      setErrors(prev => ({ ...prev, title: "Title is required" }));
      hasError = true;
    }

    if (!description.trim()) {
      setErrors(prev => ({ ...prev, description: "Description is required" }));
      hasError = true;
    }

    if (!selectedCategory) {
      setErrors(prev => ({ ...prev, category: "Please select a category" }));
      hasError = true;
    }

    if (!address.trim()) {
      setErrors(prev => ({ ...prev, address: "Location is required" }));
      hasError = true;
    }

    if (hasError) return;

    // Check if user can create 18+ events
    if (is18Plus && (!user?.is18Plus)) {
      setErrors(prev => ({ ...prev, category: "You must be 18+ to create adult events" }));
      return;
    }

    // Create event
    const newEvent: Event = {
      id: "evt_" + Date.now(),
      title: title.trim(),
      description: description.trim(),
      category: selectedCategory!,
      categoryId: selectedCategory!.id,
      is18Plus,
      startDate,
      endDate,
      location: {
        latitude: 52.2297 + (Math.random() - 0.5) * 0.1,
        longitude: 21.0122 + (Math.random() - 0.5) * 0.1,
        address: address.trim(),
        city: user?.city || "Warsaw",
      },
      ownerId: user?.id || "",
      ownerName: user?.name || "Unknown",
      capacity: capacity ? parseInt(capacity) : undefined,
      attendeesCount: 1,
      attendees: [user?.id || ""],
      status: "scheduled",
      isPublic: true,
      isBoosted: false,
      createdAt: new Date(),
    };

    addEvent(newEvent);

    // Award points for creating event
    addBeePoints(3);
    addTransaction({
      id: "tx_" + Date.now(),
      userId: user?.id || "",
      type: "create",
      delta: 3,
      eventId: newEvent.id,
      eventTitle: newEvent.title,
      createdAt: new Date(),
      description: "Created an event",
    });

    // Navigate back
    navigation.navigate("Home");
  };

  const renderCategoryPicker = () => (
    <ModalComponent
      visible={showCategoryModal}
      onClose={() => setShowCategoryModal(false)}
      title="Select Category"
      size="lg"
    >
      <View>
        {EVENT_CATEGORIES.slice(0, 50).map((category) => (
          <Pressable
            key={category.id}
            onPress={() => {
              setSelectedCategory(category);
              setShowCategoryModal(false);
              setErrors(prev => ({ ...prev, category: "" }));
            }}
            className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 mb-2 flex-row items-center active:bg-gray-200 dark:active:bg-gray-700"
          >
            <View
              className="w-10 h-10 rounded-full items-center justify-center mr-3"
              style={{ backgroundColor: category.color }}
            >
              <Ionicons name={category.icon as any} size={20} color="#fff" />
            </View>
            <Text className="text-gray-900 dark:text-white font-semibold">
              {category.name}
            </Text>
          </Pressable>
        ))}
      </View>
    </ModalComponent>
  );

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-gray-900" edges={["top"]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView className="flex-1" keyboardShouldPersistTaps="handled">
          <View className="px-6 py-6">
            {/* Header */}
            <View className="flex-row items-center mb-6">
              <Pressable
                onPress={() => navigation.goBack()}
                className="w-10 h-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 mr-3"
              >
                <Ionicons name="close" size={24} color="#6B7280" />
              </Pressable>
              <Text className="text-2xl font-bold text-gray-900 dark:text-white">
                Create Event
              </Text>
            </View>

            {/* Form */}
            <Input
              label="Event Title"
              placeholder="What are you organizing?"
              value={title}
              onChangeText={(text) => {
                setTitle(text);
                setErrors(prev => ({ ...prev, title: "" }));
              }}
              error={errors.title}
            />

            <Input
              label="Description"
              placeholder="Tell people what to expect..."
              value={description}
              onChangeText={(text) => {
                setDescription(text);
                setErrors(prev => ({ ...prev, description: "" }));
              }}
              error={errors.description}
              multiline
              numberOfLines={4}
              style={{ height: 100, textAlignVertical: "top" }}
            />

            {/* Category Picker */}
            <View className="mb-4">
              <Text className="text-gray-700 dark:text-gray-300 font-semibold mb-2">
                Category
              </Text>
              <Pressable
                onPress={() => setShowCategoryModal(true)}
                className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 flex-row items-center justify-between"
              >
                {selectedCategory ? (
                  <View className="flex-row items-center">
                    <View
                      className="w-10 h-10 rounded-full items-center justify-center mr-3"
                      style={{ backgroundColor: selectedCategory.color }}
                    >
                      <Ionicons
                        name={selectedCategory.icon as any}
                        size={20}
                        color="#fff"
                      />
                    </View>
                    <Text className="text-gray-900 dark:text-white font-semibold">
                      {selectedCategory.name}
                    </Text>
                  </View>
                ) : (
                  <Text className="text-gray-400">Select a category</Text>
                )}
                <Ionicons name="chevron-down" size={20} color="#6B7280" />
              </Pressable>
              {errors.category && (
                <Text className="text-red-500 text-sm mt-1 ml-1">
                  {errors.category}
                </Text>
              )}
            </View>

            {/* Date & Time */}
            <View className="mb-4">
              <Text className="text-gray-700 dark:text-gray-300 font-semibold mb-2">
                Start Date & Time
              </Text>
              <Pressable
                onPress={() => {
                  setDatePickerMode("start");
                  setShowDatePicker(true);
                }}
                className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 flex-row items-center justify-between"
              >
                <Text className="text-gray-900 dark:text-white">
                  {startDate.toLocaleString()}
                </Text>
                <Ionicons name="calendar-outline" size={20} color="#6B7280" />
              </Pressable>
            </View>

            {showDatePicker && (
              <DateTimePicker
                value={datePickerMode === "start" ? startDate : endDate}
                mode="datetime"
                display="default"
                onChange={(event, date) => {
                  setShowDatePicker(false);
                  if (date) {
                    if (datePickerMode === "start") {
                      setStartDate(date);
                      if (date >= endDate) {
                        setEndDate(new Date(date.getTime() + 3600000));
                      }
                    } else {
                      setEndDate(date);
                    }
                  }
                }}
              />
            )}

            <Input
              label="Location"
              placeholder="Where is it happening?"
              value={address}
              onChangeText={(text) => {
                setAddress(text);
                setErrors(prev => ({ ...prev, address: "" }));
              }}
              error={errors.address}
              icon={<Ionicons name="location-outline" size={20} color="#6B7280" />}
            />

            <Input
              label="Capacity (Optional)"
              placeholder="Maximum number of attendees"
              value={capacity}
              onChangeText={setCapacity}
              keyboardType="numeric"
              icon={<Ionicons name="people-outline" size={20} color="#6B7280" />}
            />

            {/* 18+ Toggle */}
            <Pressable
              onPress={() => {
                if (user?.is18Plus) {
                  setIs18Plus(!is18Plus);
                }
              }}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 flex-row items-center justify-between mb-6"
            >
              <View className="flex-row items-center flex-1">
                <Ionicons name="alert-circle-outline" size={24} color="#EF4444" />
                <View className="ml-3 flex-1">
                  <Text className="text-gray-900 dark:text-white font-semibold">
                    18+ Event
                  </Text>
                  <Text className="text-gray-500 dark:text-gray-400 text-sm">
                    {user?.is18Plus
                      ? "Only adults can join"
                      : "You must be 18+ to enable this"}
                  </Text>
                </View>
              </View>
              <View
                className={`w-12 h-7 rounded-full p-1 ${
                  is18Plus ? "bg-yellow-500" : "bg-gray-300 dark:bg-gray-600"
                }`}
              >
                <View
                  className={`w-5 h-5 rounded-full bg-white ${
                    is18Plus ? "ml-auto" : ""
                  }`}
                />
              </View>
            </Pressable>

            {/* Create Button */}
            <Button
              title="Create Event (+3 Bee Points)"
              onPress={handleCreateEvent}
              size="lg"
              icon={<Ionicons name="add-circle" size={20} color="#fff" />}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {renderCategoryPicker()}
    </SafeAreaView>
  );
};
