// Core types for the Bee app

export interface User {
  id: string;
  name: string;
  email: string;
  age: number;
  is18Plus: boolean;
  bio?: string;
  interests: string[];
  city: string;
  avatarUrl?: string;
  beePoints: number;
  createdAt: Date;
  visibility: "public" | "friends-only";
  verified?: boolean;
}

export interface EventCategory {
  id: string;
  name: string;
  icon: string;
  tags: string[];
  color?: string;
}

export interface EventLocation {
  latitude: number;
  longitude: number;
  address: string;
  city: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  category: EventCategory;
  categoryId: string;
  photoUrl?: string;
  is18Plus: boolean;
  startDate: Date;
  endDate: Date;
  location: EventLocation;
  ownerId: string;
  ownerName: string;
  capacity?: number;
  attendeesCount: number;
  attendees: string[]; // user IDs
  status: "scheduled" | "ongoing" | "completed" | "cancelled";
  isPublic: boolean;
  boostedUntil?: Date;
  isBoosted: boolean;
  links?: string[];
  createdAt: Date;
  rating?: number;
}

export interface Attendance {
  id: string;
  eventId: string;
  userId: string;
  status: "invited" | "going" | "attended" | "declined";
  createdAt: Date;
}

export interface Invite {
  id: string;
  eventId: string;
  inviterId: string;
  inviterName: string;
  inviteeId: string;
  acceptedAt?: Date;
  createdAt: Date;
}

export interface BeePointTransaction {
  id: string;
  userId: string;
  type: "create" | "invite" | "attend" | "boost";
  delta: number; // positive for earning, negative for spending
  eventId?: string;
  eventTitle?: string;
  createdAt: Date;
  description: string;
}

export interface Filter {
  categories: string[];
  distance?: number; // in km
  dateRange?: {
    start: Date;
    end: Date;
  };
  is18Plus: boolean;
  showOnlyFree: boolean;
}

export interface UserLocation {
  latitude: number;
  longitude: number;
  city?: string;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  requirement: number;
  type: "events_attended" | "events_created" | "invites_sent" | "organizer";
}

export interface UserAchievement {
  achievementId: string;
  userId: string;
  unlockedAt: Date;
}

export interface NotificationSettings {
  eventReminders: boolean;
  inviteAccepted: boolean;
  nearbyEvents: boolean;
  categorySubscriptions: string[];
}

export interface Chat {
  id: string;
  eventId?: string;
  participants: string[];
  messages: ChatMessage[];
  lastMessageAt: Date;
}

export interface ChatMessage {
  id: string;
  chatId: string;
  senderId: string;
  senderName: string;
  text: string;
  createdAt: Date;
  read: boolean;
}
