# Bee - Organize Real-Life Events & Meetups

![Bee App](https://img.shields.io/badge/Platform-iOS%20%26%20Android-green)
![React Native](https://img.shields.io/badge/React%20Native-0.76.7-blue)
![Expo](https://img.shields.io/badge/Expo-SDK%2053-black)

**Bee** is a mobile application for organizing and discovering real-life offline events and meetups. Connect with people in your area through activities like coffee meetups, sports, games, and more!

## 🎯 Features

### Core Features
- **User Authentication**: Email/password, Google, and phone number login
- **Event Creation**: Create events with 200+ activity categories
- **Event Discovery**: Browse events by category, location, and date
- **Interactive Map**: View nearby events on an interactive map with Google Maps integration
- **Join Events**: RSVP to events and track attendance
- **Bee Points System**: Earn points by creating events, inviting friends, and attending
- **Event Boosting**: Use Bee Points to promote your events
- **18+ Content**: Age verification system for adult-only events
- **User Profiles**: Manage your profile, interests, and settings
- **Points History**: Track your Bee Points transactions

### Bee Points Economy
- **+3 points**: Create an event
- **+2 points**: Successfully invite a friend who joins
- **+1 point**: Attend an event
- **-20 points**: Boost event for 24 hours
- **-35 points**: Boost event for 48 hours

### Event Categories (200+)
The app includes 200+ pre-configured event categories including:
- **Sports & Fitness**: Football, Basketball, Tennis, Yoga, Running, Cycling, Swimming, etc.
- **Social & Coffee**: Coffee meetings, Brunch, Lunch, Dinner, Happy Hour, Wine Tasting
- **Games & Entertainment**: Chess, Board Games, Video Games, Poker, Trivia, Karaoke
- **Outdoor & Nature**: Beach picnics, Park hangouts, BBQ, Camping, Hiking
- **Arts & Culture**: Art galleries, Museums, Photography, Painting classes
- **Learning & Education**: Language exchange, Book clubs, Coding workshops
- **Music & Dance**: Salsa, Bachata, Concerts, Live music
- **Food & Culinary**: Cooking classes, Food tours, Wine workshops
- And many more!

## 📱 Screenshots

### Main Screens
- **Home**: Browse upcoming events with filters
- **Map**: View events on an interactive map
- **Create**: Create new events with category picker
- **Profile**: View your Bee Points and activity history

## 🏗️ Architecture

### Tech Stack
- **Framework**: React Native 0.76.7 with Expo SDK 53
- **Navigation**: React Navigation (Native Stack + Bottom Tabs)
- **State Management**: Zustand with AsyncStorage persistence
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **Maps**: react-native-maps with Google Maps
- **Location**: expo-location
- **Date Handling**: date-fns
- **Icons**: Ionicons (@expo/vector-icons)

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── EventCard.tsx
│   └── Modal.tsx
├── screens/            # App screens
│   ├── LoginScreen.tsx
│   ├── RegisterScreen.tsx
│   ├── HomeScreen.tsx
│   ├── MapScreen.tsx
│   ├── CreateEventScreen.tsx
│   ├── EventDetailsScreen.tsx
│   └── ProfileScreen.tsx
├── navigation/         # Navigation configuration
│   └── AppNavigator.tsx
├── state/             # Zustand stores
│   ├── authStore.ts
│   └── eventsStore.ts
├── data/              # Static data
│   └── categories.ts
├── types/             # TypeScript types
│   └── index.ts
└── utils/             # Utility functions
    └── cn.ts
```

### State Management

#### Auth Store
- User authentication state
- Profile management
- Bee Points balance
- Login/Register/Logout actions

#### Events Store
- Events list
- Categories
- User location
- Filters
- Event CRUD operations
- Points transactions

### Data Models

#### User
```typescript
{
  id: string
  name: string
  email: string
  age: number
  is18Plus: boolean
  city: string
  interests: string[]
  beePoints: number
  visibility: "public" | "friends-only"
}
```

#### Event
```typescript
{
  id: string
  title: string
  description: string
  category: EventCategory
  is18Plus: boolean
  startDate: Date
  endDate: Date
  location: EventLocation
  ownerId: string
  attendees: string[]
  status: "scheduled" | "ongoing" | "completed"
  isBoosted: boolean
  boostedUntil?: Date
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- Bun package manager
- Expo CLI
- iOS Simulator or Android Emulator (or physical device)

### Installation

The app is already set up and running. All dependencies are installed.

### Usage

1. **Create an Account**: Register with email or use social login
2. **Set Up Profile**: Add your name, age, city, and interests
3. **Browse Events**: Explore upcoming events on the Home screen
4. **Join Events**: Tap on an event to view details and join
5. **Create Events**: Tap the Create tab to organize your own event
6. **Earn Points**: Get Bee Points by creating, joining, and inviting others
7. **Boost Events**: Use points to promote your events

## 🎨 Design Philosophy

The app follows **Apple's Human Interface Guidelines** with:
- Clean, minimalist design
- Intuitive navigation with bottom tabs
- Consistent color scheme (Yellow/Bee theme)
- Clear visual hierarchy
- Smooth animations and transitions
- Dark mode support

## 🔐 Privacy & Safety

- **Age Verification**: 18+ content is restricted to verified adults
- **Event Moderation**: Report inappropriate content
- **Privacy Controls**: Control who can see your profile and activities
- **Location Privacy**: Location sharing is optional and user-controlled

## 🎯 MVP Features

This MVP (Minimum Viable Product) includes:
- ✅ User authentication (email/password)
- ✅ Event creation with 200+ categories
- ✅ Event browsing and filtering
- ✅ Interactive map view
- ✅ Join/leave events
- ✅ Bee Points system
- ✅ Event boosting
- ✅ 18+ age verification
- ✅ User profiles
- ✅ Points transaction history

## 🚧 Future Enhancements

### Planned Features
- **Chat System**: Direct messaging and event group chats
- **Friend System**: Add friends and see their activities
- **Notifications**: Push notifications for events and invites
- **Calendar Integration**: Sync with device calendar
- **QR Check-in**: Scan QR codes to verify attendance
- **Teams/Groups**: Create recurring group meetups
- **Achievements**: Badges for milestones
- **Event Reviews**: Rate and review completed events
- **Advanced Filters**: More filtering options (distance, price, etc.)
- **Social Sharing**: Share events on social media
- **Payment Integration**: Paid events support

### Backend Integration
Currently, the app uses mock data and local storage. For production:
- Integrate with Firebase/Firestore for real-time data
- Implement proper authentication (Firebase Auth, OAuth)
- Add push notifications service
- Set up image storage for event photos
- Implement geospatial queries for nearby events
- Add analytics and crash reporting

## 📝 Notes

### Known Limitations (MVP)
- Mock authentication (no real backend)
- Local data storage only (data is lost on app restart)
- Limited to 200 categories (expandable to 1000+)
- No real-time updates
- No actual payment processing
- Location coordinates are randomly generated for demo

### TypeScript Notice
There's a harmless TypeScript warning from the `react-native-maps` library that doesn't affect functionality. This is a known issue with the library's type definitions.

## 🛠️ Development

### Adding New Categories
Edit `src/data/categories.ts` to add more event categories:
```typescript
{
  id: "cat_xxx",
  name: "Category Name",
  icon: "icon-name", // Ionicons name
  tags: ["tag1", "tag2"],
  color: "#HEX_COLOR"
}
```

### Customizing Colors
The app uses a yellow/bee theme. To change:
1. Update Tailwind colors in `tailwind.config.js`
2. Modify `bg-yellow-500` classes throughout components

## 📄 License

This project is part of the Vibecode platform.

## 🤝 Support

For issues or questions, please contact the development team.

---

**Made with ❤️ by the Bee Team**

*Version 1.0.0 - MVP Release*
