import React, { useEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";
import * as Location from "expo-location";
import { useEventsStore } from "../state/eventsStore";
import { useAuthStore } from "../state/authStore";

export const MapScreen = ({ navigation }: any) => {
  const events = useEventsStore(state => state.events);
  const user = useAuthStore(state => state.user);
  const [region, setRegion] = useState({
    latitude: 52.2297,
    longitude: 21.0122,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [locationPermission, setLocationPermission] = useState(false);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status === "granted") {
      setLocationPermission(true);
      const location = await Location.getCurrentPositionAsync({});
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
      useEventsStore.getState().setUserLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    }
  };

  const centerOnUser = async () => {
    if (!locationPermission) {
      await requestLocationPermission();
      return;
    }

    const location = await Location.getCurrentPositionAsync({});
    setRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };

  const filteredEvents = events.filter(event => {
    if (user && !user.is18Plus && event.is18Plus) {
      return false;
    }
    return true;
  });

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-gray-900" edges={["top"]}>
      <View className="flex-1">
        {/* Header */}
        <View className="px-6 py-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <Text className="text-2xl font-bold text-gray-900 dark:text-white">
            Nearby Events
          </Text>
          <Text className="text-gray-600 dark:text-gray-400 text-sm mt-1">
            {filteredEvents.length} events in your area
          </Text>
        </View>

        {/* Map */}
        <View className="flex-1">
          <MapView
            provider={PROVIDER_GOOGLE}
            style={StyleSheet.absoluteFillObject}
            region={region}
            showsUserLocation
            showsMyLocationButton={false}
          >
            {filteredEvents.map((event) => (
              <Marker
                key={event.id}
                coordinate={{
                  latitude: event.location.latitude,
                  longitude: event.location.longitude,
                }}
                pinColor={event.isBoosted ? "#EAB308" : "#F44336"}
                onPress={() => navigation.navigate("EventDetails", { event })}
              >
                <View
                  style={{
                    backgroundColor: event.isBoosted ? "#EAB308" : "#F44336",
                    padding: 8,
                    borderRadius: 20,
                    borderWidth: 2,
                    borderColor: "#fff",
                  }}
                >
                  <Ionicons
                    name={event.category.icon as any}
                    size={20}
                    color="#fff"
                  />
                </View>
              </Marker>
            ))}
          </MapView>

          {/* Center on User Button */}
          <Pressable
            onPress={centerOnUser}
            className="absolute bottom-6 right-6 bg-white dark:bg-gray-800 w-14 h-14 rounded-full items-center justify-center shadow-lg"
            style={{ elevation: 5 }}
          >
            <Ionicons name="locate" size={24} color="#EAB308" />
          </Pressable>

          {/* Legend */}
          <View className="absolute top-4 left-4 bg-white dark:bg-gray-800 rounded-xl p-3 shadow-lg" style={{ elevation: 5 }}>
            <View className="flex-row items-center mb-2">
              <View className="w-3 h-3 rounded-full bg-yellow-500 mr-2" />
              <Text className="text-gray-900 dark:text-white text-xs font-semibold">
                Boosted
              </Text>
            </View>
            <View className="flex-row items-center">
              <View className="w-3 h-3 rounded-full bg-red-500 mr-2" />
              <Text className="text-gray-900 dark:text-white text-xs font-semibold">
                Regular
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
