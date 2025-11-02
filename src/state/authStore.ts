import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "../types";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  // Actions
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string, age: number, city: string) => Promise<void>;
  logout: () => void;
  updateProfile: (updates: Partial<User>) => void;
  addBeePoints: (points: number) => void;
  spendBeePoints: (points: number) => boolean;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,

      login: async (email: string, password: string) => {
        set({ isLoading: true });

        // Mock login - In production, this would call Firebase or your backend
        await new Promise(resolve => setTimeout(resolve, 1000));

        const mockUser: User = {
          id: "user_" + Date.now(),
          email,
          name: "Demo User",
          age: 25,
          is18Plus: true,
          city: "Warsaw",
          interests: [],
          beePoints: 0,
          createdAt: new Date(),
          visibility: "public",
        };

        set({
          user: mockUser,
          isAuthenticated: true,
          isLoading: false
        });
      },

      register: async (email: string, password: string, name: string, age: number, city: string) => {
        set({ isLoading: true });

        // Mock registration
        await new Promise(resolve => setTimeout(resolve, 1000));

        const newUser: User = {
          id: "user_" + Date.now(),
          email,
          name,
          age,
          is18Plus: age >= 18,
          city,
          interests: [],
          beePoints: 10, // Welcome bonus
          createdAt: new Date(),
          visibility: "public",
        };

        set({
          user: newUser,
          isAuthenticated: true,
          isLoading: false
        });
      },

      logout: () => {
        set({
          user: null,
          isAuthenticated: false
        });
      },

      updateProfile: (updates: Partial<User>) => {
        const { user } = get();
        if (!user) return;

        set({
          user: {
            ...user,
            ...updates
          }
        });
      },

      addBeePoints: (points: number) => {
        const { user } = get();
        if (!user) return;

        set({
          user: {
            ...user,
            beePoints: user.beePoints + points
          }
        });
      },

      spendBeePoints: (points: number) => {
        const { user } = get();
        if (!user) return false;

        if (user.beePoints < points) {
          return false; // Not enough points
        }

        set({
          user: {
            ...user,
            beePoints: user.beePoints - points
          }
        });

        return true;
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
