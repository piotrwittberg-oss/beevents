import { create } from "zustand";
import { Event, EventCategory, Filter, UserLocation, BeePointTransaction } from "../types";

interface EventsState {
  events: Event[];
  categories: EventCategory[];
  userLocation: UserLocation | null;
  filter: Filter;
  selectedEvent: Event | null;
  transactions: BeePointTransaction[];

  // Actions
  setEvents: (events: Event[]) => void;
  addEvent: (event: Event) => void;
  updateEvent: (eventId: string, updates: Partial<Event>) => void;
  deleteEvent: (eventId: string) => void;
  setCategories: (categories: EventCategory[]) => void;
  setUserLocation: (location: UserLocation) => void;
  setFilter: (filter: Partial<Filter>) => void;
  selectEvent: (event: Event | null) => void;
  joinEvent: (eventId: string, userId: string) => void;
  leaveEvent: (eventId: string, userId: string) => void;
  boostEvent: (eventId: string, hours: number) => void;
  addTransaction: (transaction: BeePointTransaction) => void;
  getFilteredEvents: () => Event[];
  getNearbyEvents: (radiusKm: number) => Event[];
}

// Haversine formula to calculate distance between two coordinates
const calculateDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number => {
  const R = 6371; // Earth radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

export const useEventsStore = create<EventsState>((set, get) => ({
  events: [],
  categories: [],
  userLocation: null,
  filter: {
    categories: [],
    is18Plus: false,
    showOnlyFree: true,
  },
  selectedEvent: null,
  transactions: [],

  setEvents: (events: Event[]) => set({ events }),

  addEvent: (event: Event) => {
    set((state) => ({
      events: [event, ...state.events]
    }));
  },

  updateEvent: (eventId: string, updates: Partial<Event>) => {
    set((state) => ({
      events: state.events.map((event) =>
        event.id === eventId ? { ...event, ...updates } : event
      )
    }));
  },

  deleteEvent: (eventId: string) => {
    set((state) => ({
      events: state.events.filter((event) => event.id !== eventId)
    }));
  },

  setCategories: (categories: EventCategory[]) => set({ categories }),

  setUserLocation: (location: UserLocation) => set({ userLocation: location }),

  setFilter: (filterUpdate: Partial<Filter>) => {
    set((state) => ({
      filter: { ...state.filter, ...filterUpdate }
    }));
  },

  selectEvent: (event: Event | null) => set({ selectedEvent: event }),

  joinEvent: (eventId: string, userId: string) => {
    set((state) => ({
      events: state.events.map((event) => {
        if (event.id === eventId) {
          return {
            ...event,
            attendees: [...event.attendees, userId],
            attendeesCount: event.attendeesCount + 1
          };
        }
        return event;
      })
    }));
  },

  leaveEvent: (eventId: string, userId: string) => {
    set((state) => ({
      events: state.events.map((event) => {
        if (event.id === eventId) {
          return {
            ...event,
            attendees: event.attendees.filter((id) => id !== userId),
            attendeesCount: event.attendeesCount - 1
          };
        }
        return event;
      })
    }));
  },

  boostEvent: (eventId: string, hours: number) => {
    const boostedUntil = new Date();
    boostedUntil.setHours(boostedUntil.getHours() + hours);

    set((state) => ({
      events: state.events.map((event) =>
        event.id === eventId
          ? { ...event, isBoosted: true, boostedUntil }
          : event
      )
    }));
  },

  addTransaction: (transaction: BeePointTransaction) => {
    set((state) => ({
      transactions: [transaction, ...state.transactions]
    }));
  },

  getFilteredEvents: () => {
    const { events, filter } = get();
    let filtered = [...events];

    // Filter by categories
    if (filter.categories.length > 0) {
      filtered = filtered.filter((event) =>
        filter.categories.includes(event.categoryId)
      );
    }

    // Filter by 18+
    if (filter.is18Plus) {
      filtered = filtered.filter((event) => event.is18Plus);
    }

    // Sort boosted events first
    filtered.sort((a, b) => {
      if (a.isBoosted && !b.isBoosted) return -1;
      if (!a.isBoosted && b.isBoosted) return 1;
      return b.createdAt.getTime() - a.createdAt.getTime();
    });

    return filtered;
  },

  getNearbyEvents: (radiusKm: number) => {
    const { events, userLocation } = get();
    if (!userLocation) return events;

    return events.filter((event) => {
      const distance = calculateDistance(
        userLocation.latitude,
        userLocation.longitude,
        event.location.latitude,
        event.location.longitude
      );
      return distance <= radiusKm;
    });
  },
}));
