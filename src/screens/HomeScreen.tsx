import React, { useEffect } from "react";
import { View, Text, FlatList, Pressable, RefreshControl } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useAuthStore } from "../state/authStore";
import { useEventsStore } from "../state/eventsStore";
import { EventCard } from "../components/EventCard";
import { Event } from "../types";
import { EVENT_CATEGORIES } from "../data/categories";

export const HomeScreen = ({ navigation }: any) => {
  const user = useAuthStore(state => state.user);
  const events = useEventsStore(state => state.events);
  const setCategories = useEventsStore(state => state.setCategories);
  const filter = useEventsStore(state => state.filter);

  const [refreshing, setRefreshing] = React.useState(false);
  const [showFilters, setShowFilters] = React.useState(false);

  useEffect(() => {
    // Initialize categories
    setCategories(EVENT_CATEGORIES);

    // Load mock events for demo
    loadMockEvents();
  }, []);

  const loadMockEvents = () => {
    const mockEvents: Event[] = [
      {
        id: "evt_1",
        title: "Morning Coffee & Chess",
        description: "Join us for a relaxed morning of chess over coffee. All skill levels welcome! We'll have multiple boards set up.",
        category: EVENT_CATEGORIES[30],
        categoryId: "cat_31",
        is18Plus: false,
        startDate: new Date(Date.now() + 86400000),
        endDate: new Date(Date.now() + 90000000),
        location: {
          latitude: 52.2297,
          longitude: 21.0122,
          address: "Cafe Central, ul. Nowy Świat 15",
          city: "Warsaw"
        },
        ownerId: "user_1",
        ownerName: "Anna K.",
        attendeesCount: 5,
        attendees: ["user_1", "user_2"],
        status: "scheduled",
        isPublic: true,
        isBoosted: false,
        createdAt: new Date(),
      },
      {
        id: "evt_2",
        title: "Beach Volleyball Tournament",
        description: "Summer beach volleyball tournament! Form teams of 4 and compete for glory. BBQ afterwards!",
        category: EVENT_CATEGORIES[3],
        categoryId: "cat_4",
        photoUrl: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800",
        is18Plus: false,
        startDate: new Date(Date.now() + 172800000),
        endDate: new Date(Date.now() + 194400000),
        location: {
          latitude: 52.2642,
          longitude: 20.9841,
          address: "Poniatówka Beach, Warsaw",
          city: "Warsaw"
        },
        ownerId: "user_2",
        ownerName: "Marek T.",
        capacity: 32,
        attendeesCount: 18,
        attendees: ["user_2", "user_3"],
        status: "scheduled",
        isPublic: true,
        isBoosted: true,
        boostedUntil: new Date(Date.now() + 86400000),
        createdAt: new Date(),
      },
      {
        id: "evt_3",
        title: "Trivia Night at The Pub",
        description: "Test your knowledge at our weekly trivia night! Teams of 4-6 people. Prizes for top 3 teams!",
        category: EVENT_CATEGORIES[35],
        categoryId: "cat_36",
        is18Plus: true,
        startDate: new Date(Date.now() + 259200000),
        endDate: new Date(Date.now() + 270000000),
        location: {
          latitude: 52.2319,
          longitude: 21.0067,
          address: "The Old Pub, ul. Krakowskie Przedmieście 30",
          city: "Warsaw"
        },
        ownerId: "user_3",
        ownerName: "Kasia W.",
        capacity: 50,
        attendeesCount: 28,
        attendees: ["user_3"],
        status: "scheduled",
        isPublic: true,
        isBoosted: true,
        boostedUntil: new Date(Date.now() + 172800000),
        createdAt: new Date(),
      }
    ];

    useEventsStore.getState().setEvents(mockEvents);
  };

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      loadMockEvents();
      setRefreshing(false);
    }, 1000);
  };

  const filteredEvents = events.filter(event => {
    // Filter by 18+ if user is underage
    if (user && !user.is18Plus && event.is18Plus) {
      return false;
    }

    // Apply user filters
    if (filter.is18Plus && !event.is18Plus) {
      return false;
    }

    if (filter.categories.length > 0 && !filter.categories.includes(event.categoryId)) {
      return false;
    }

    return true;
  });

  const renderHeader = () => (
    <View className="px-6 py-4">
      {/* Welcome */}
      <View className="mb-6">
        <Text className="text-gray-600 dark:text-gray-400 text-base">
          Welcome back,
        </Text>
        <Text className="text-3xl font-bold text-gray-900 dark:text-white">
          {user?.name || "User"}
        </Text>
      </View>

      {/* Points Display */}
      <View className="bg-yellow-500 rounded-2xl p-4 flex-row items-center justify-between mb-6">
        <View className="flex-row items-center">
          <Ionicons name="flash" size={32} color="#fff" />
          <View className="ml-3">
            <Text className="text-white text-sm font-medium">Bee Points</Text>
            <Text className="text-white text-2xl font-bold">
              {user?.beePoints || 0}
            </Text>
          </View>
        </View>
        <Pressable
          onPress={() => navigation.navigate("Profile")}
          className="bg-white/20 px-4 py-2 rounded-xl"
        >
          <Text className="text-white font-semibold">View</Text>
        </Pressable>
      </View>

      {/* Filters */}
      <View className="flex-row items-center justify-between mb-4">
        <Text className="text-xl font-bold text-gray-900 dark:text-white">
          Upcoming Events
        </Text>
        <Pressable
          onPress={() => setShowFilters(!showFilters)}
          className="flex-row items-center bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-xl"
        >
          <Ionicons name="filter" size={18} color="#6B7280" />
          <Text className="text-gray-700 dark:text-gray-300 ml-2 font-semibold">
            Filter
          </Text>
        </Pressable>
      </View>

      {showFilters && (
        <View className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-4 mb-4">
          <Text className="text-gray-900 dark:text-white font-semibold mb-2">
            Quick Filters
          </Text>
          <View className="flex-row flex-wrap">
            <Pressable className="bg-yellow-500 px-3 py-1.5 rounded-full mr-2 mb-2">
              <Text className="text-white font-semibold text-sm">All</Text>
            </Pressable>
            <Pressable className="bg-white dark:bg-gray-700 px-3 py-1.5 rounded-full mr-2 mb-2">
              <Text className="text-gray-700 dark:text-gray-300 font-semibold text-sm">
                Sports
              </Text>
            </Pressable>
            <Pressable className="bg-white dark:bg-gray-700 px-3 py-1.5 rounded-full mr-2 mb-2">
              <Text className="text-gray-700 dark:text-gray-300 font-semibold text-sm">
                Social
              </Text>
            </Pressable>
            <Pressable className="bg-white dark:bg-gray-700 px-3 py-1.5 rounded-full mr-2 mb-2">
              <Text className="text-gray-700 dark:text-gray-300 font-semibold text-sm">
                Games
              </Text>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );

  const renderEmpty = () => (
    <View className="items-center justify-center py-12">
      <Ionicons name="calendar-outline" size={64} color="#D1D5DB" />
      <Text className="text-gray-500 dark:text-gray-400 text-lg font-semibold mt-4">
        No events found
      </Text>
      <Text className="text-gray-400 dark:text-gray-500 text-sm mt-2">
        Try adjusting your filters
      </Text>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-gray-900" edges={["top"]}>
      <FlatList
        data={filteredEvents}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="px-6">
            <EventCard
              event={item}
              onPress={() => navigation.navigate("EventDetails", { event: item })}
            />
          </View>
        )}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={renderEmpty}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};
