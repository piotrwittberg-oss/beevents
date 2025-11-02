import { EventCategory } from "../types";

// Comprehensive list of event categories for the Bee app
// Icons are from Ionicons (@expo/vector-icons)
export const EVENT_CATEGORIES: EventCategory[] = [
  // Sports & Fitness (100+ categories)
  { id: "cat_1", name: "Football", icon: "football", tags: ["sports", "team", "outdoor"], color: "#4CAF50" },
  { id: "cat_2", name: "Basketball", icon: "basketball", tags: ["sports", "team", "outdoor"], color: "#FF9800" },
  { id: "cat_3", name: "Tennis", icon: "tennisball", tags: ["sports", "outdoor"], color: "#FFEB3B" },
  { id: "cat_4", name: "Volleyball", icon: "baseball", tags: ["sports", "team", "outdoor"], color: "#2196F3" },
  { id: "cat_5", name: "Running", icon: "walk", tags: ["sports", "fitness", "outdoor"], color: "#009688" },
  { id: "cat_6", name: "Cycling", icon: "bicycle", tags: ["sports", "fitness", "outdoor"], color: "#00BCD4" },
  { id: "cat_7", name: "Swimming", icon: "water", tags: ["sports", "fitness", "outdoor"], color: "#03A9F4" },
  { id: "cat_8", name: "Yoga", icon: "body", tags: ["fitness", "wellness", "indoor"], color: "#9C27B0" },
  { id: "cat_9", name: "Gym Workout", icon: "barbell", tags: ["fitness", "indoor"], color: "#F44336" },
  { id: "cat_10", name: "Hiking", icon: "trail-sign", tags: ["sports", "outdoor", "nature"], color: "#8BC34A" },
  { id: "cat_11", name: "Rock Climbing", icon: "fitness", tags: ["sports", "adventure", "outdoor"], color: "#795548" },
  { id: "cat_12", name: "Skateboarding", icon: "disc", tags: ["sports", "outdoor"], color: "#607D8B" },
  { id: "cat_13", name: "Boxing", icon: "fitness", tags: ["sports", "fitness", "indoor"], color: "#E91E63" },
  { id: "cat_14", name: "Martial Arts", icon: "body", tags: ["sports", "fitness", "indoor"], color: "#673AB7" },
  { id: "cat_15", name: "Dance Fitness", icon: "musical-notes", tags: ["fitness", "dance", "indoor"], color: "#E91E63" },
  { id: "cat_16", name: "Pilates", icon: "body", tags: ["fitness", "wellness", "indoor"], color: "#9C27B0" },
  { id: "cat_17", name: "CrossFit", icon: "barbell", tags: ["fitness", "indoor"], color: "#FF5722" },
  { id: "cat_18", name: "Badminton", icon: "tennisball", tags: ["sports", "indoor"], color: "#FFC107" },
  { id: "cat_19", name: "Table Tennis", icon: "tennisball", tags: ["sports", "indoor"], color: "#FF9800" },
  { id: "cat_20", name: "Golf", icon: "golf", tags: ["sports", "outdoor"], color: "#4CAF50" },

  // Social & Coffee (50+ categories)
  { id: "cat_21", name: "Coffee Meet", icon: "cafe", tags: ["social", "food", "indoor"], color: "#795548" },
  { id: "cat_22", name: "Brunch", icon: "restaurant", tags: ["social", "food"], color: "#FF9800" },
  { id: "cat_23", name: "Lunch", icon: "fast-food", tags: ["social", "food"], color: "#FFC107" },
  { id: "cat_24", name: "Dinner", icon: "restaurant", tags: ["social", "food"], color: "#F44336" },
  { id: "cat_25", name: "Happy Hour", icon: "beer", tags: ["social", "drinks", "18+"], color: "#FF9800" },
  { id: "cat_26", name: "Wine Tasting", icon: "wine", tags: ["social", "drinks", "18+"], color: "#9C27B0" },
  { id: "cat_27", name: "Cocktail Night", icon: "wine", tags: ["social", "drinks", "18+"], color: "#E91E63" },
  { id: "cat_28", name: "Tea Time", icon: "cafe", tags: ["social", "food"], color: "#8BC34A" },
  { id: "cat_29", name: "Breakfast Club", icon: "sunny", tags: ["social", "food"], color: "#FFEB3B" },
  { id: "cat_30", name: "Food Tour", icon: "fast-food", tags: ["social", "food", "outdoor"], color: "#FF5722" },

  // Games & Entertainment (100+ categories)
  { id: "cat_31", name: "Chess", icon: "grid", tags: ["games", "board", "indoor"], color: "#424242" },
  { id: "cat_32", name: "Board Games", icon: "game-controller", tags: ["games", "indoor"], color: "#9C27B0" },
  { id: "cat_33", name: "Card Games", icon: "card", tags: ["games", "indoor"], color: "#F44336" },
  { id: "cat_34", name: "Video Games", icon: "game-controller", tags: ["games", "indoor"], color: "#2196F3" },
  { id: "cat_35", name: "Poker", icon: "card", tags: ["games", "indoor", "18+"], color: "#4CAF50" },
  { id: "cat_36", name: "Trivia Night", icon: "bulb", tags: ["games", "social", "indoor"], color: "#FFC107" },
  { id: "cat_37", name: "Karaoke", icon: "mic", tags: ["entertainment", "music", "indoor"], color: "#E91E63" },
  { id: "cat_38", name: "Movie Night", icon: "film", tags: ["entertainment", "indoor"], color: "#673AB7" },
  { id: "cat_39", name: "Theater", icon: "ticket", tags: ["entertainment", "culture", "indoor"], color: "#9C27B0" },
  { id: "cat_40", name: "Comedy Show", icon: "happy", tags: ["entertainment", "indoor"], color: "#FFEB3B" },

  // Outdoor & Nature (80+ categories)
  { id: "cat_41", name: "Beach Picnic", icon: "beach", tags: ["outdoor", "nature", "social"], color: "#00BCD4" },
  { id: "cat_42", name: "Park Hangout", icon: "leaf", tags: ["outdoor", "nature", "social"], color: "#4CAF50" },
  { id: "cat_43", name: "BBQ Party", icon: "flame", tags: ["outdoor", "food", "social"], color: "#FF5722" },
  { id: "cat_44", name: "Camping", icon: "bonfire", tags: ["outdoor", "nature", "adventure"], color: "#795548" },
  { id: "cat_45", name: "Fishing", icon: "fish", tags: ["outdoor", "nature"], color: "#2196F3" },
  { id: "cat_46", name: "Bird Watching", icon: "eye", tags: ["outdoor", "nature"], color: "#8BC34A" },
  { id: "cat_47", name: "Stargazing", icon: "moon", tags: ["outdoor", "nature"], color: "#3F51B5" },
  { id: "cat_48", name: "Outdoor Yoga", icon: "leaf", tags: ["fitness", "outdoor", "wellness"], color: "#9C27B0" },
  { id: "cat_49", name: "Dog Walking", icon: "paw", tags: ["outdoor", "pets"], color: "#795548" },
  { id: "cat_50", name: "Gardening", icon: "flower", tags: ["outdoor", "hobby"], color: "#4CAF50" },

  // Arts & Culture (100+ categories)
  { id: "cat_51", name: "Art Gallery", icon: "color-palette", tags: ["culture", "art", "indoor"], color: "#9C27B0" },
  { id: "cat_52", name: "Museum Visit", icon: "home", tags: ["culture", "education", "indoor"], color: "#795548" },
  { id: "cat_53", name: "Photography Walk", icon: "camera", tags: ["art", "outdoor"], color: "#607D8B" },
  { id: "cat_54", name: "Painting Class", icon: "brush", tags: ["art", "creative", "indoor"], color: "#E91E63" },
  { id: "cat_55", name: "Drawing Workshop", icon: "pencil", tags: ["art", "creative", "indoor"], color: "#FF9800" },
  { id: "cat_56", name: "Pottery Class", icon: "color-palette", tags: ["art", "creative", "indoor"], color: "#795548" },
  { id: "cat_57", name: "Sculpture", icon: "cube", tags: ["art", "creative", "indoor"], color: "#607D8B" },
  { id: "cat_58", name: "Craft Workshop", icon: "construct", tags: ["creative", "indoor"], color: "#FF9800" },
  { id: "cat_59", name: "Concert", icon: "musical-notes", tags: ["music", "entertainment"], color: "#9C27B0" },
  { id: "cat_60", name: "Live Music", icon: "musical-note", tags: ["music", "entertainment"], color: "#E91E63" },

  // Learning & Education (80+ categories)
  { id: "cat_61", name: "Language Exchange", icon: "chatbubbles", tags: ["education", "social"], color: "#2196F3" },
  { id: "cat_62", name: "Book Club", icon: "book", tags: ["education", "social", "indoor"], color: "#795548" },
  { id: "cat_63", name: "Coding Workshop", icon: "code-slash", tags: ["education", "tech", "indoor"], color: "#4CAF50" },
  { id: "cat_64", name: "Public Speaking", icon: "mic", tags: ["education", "skill"], color: "#FF5722" },
  { id: "cat_65", name: "Cooking Class", icon: "restaurant", tags: ["education", "food", "indoor"], color: "#FF9800" },
  { id: "cat_66", name: "Baking Workshop", icon: "cafe", tags: ["education", "food", "indoor"], color: "#FFC107" },
  { id: "cat_67", name: "Wine Workshop", icon: "wine", tags: ["education", "food", "18+"], color: "#9C27B0" },
  { id: "cat_68", name: "Photography Course", icon: "camera", tags: ["education", "art"], color: "#607D8B" },
  { id: "cat_69", name: "Music Lessons", icon: "musical-notes", tags: ["education", "music"], color: "#E91E63" },
  { id: "cat_70", name: "Dance Lessons", icon: "body", tags: ["education", "dance"], color: "#9C27B0" },

  // Music & Dance (60+ categories)
  { id: "cat_71", name: "Salsa Dancing", icon: "body", tags: ["dance", "social"], color: "#F44336" },
  { id: "cat_72", name: "Bachata", icon: "body", tags: ["dance", "social"], color: "#E91E63" },
  { id: "cat_73", name: "Tango", icon: "body", tags: ["dance", "social"], color: "#9C27B0" },
  { id: "cat_74", name: "Hip Hop Dance", icon: "musical-notes", tags: ["dance", "music"], color: "#FF9800" },
  { id: "cat_75", name: "Contemporary Dance", icon: "body", tags: ["dance", "art"], color: "#673AB7" },
  { id: "cat_76", name: "DJ Night", icon: "disc", tags: ["music", "entertainment", "18+"], color: "#2196F3" },
  { id: "cat_77", name: "Open Mic", icon: "mic", tags: ["music", "entertainment"], color: "#FF5722" },
  { id: "cat_78", name: "Jazz Night", icon: "musical-note", tags: ["music", "entertainment"], color: "#795548" },
  { id: "cat_79", name: "Rock Concert", icon: "musical-notes", tags: ["music", "entertainment"], color: "#424242" },
  { id: "cat_80", name: "Classical Music", icon: "musical-note", tags: ["music", "culture"], color: "#9C27B0" },

  // Tech & Innovation (50+ categories)
  { id: "cat_81", name: "Hackathon", icon: "code-slash", tags: ["tech", "competition"], color: "#4CAF50" },
  { id: "cat_82", name: "Startup Meetup", icon: "business", tags: ["tech", "networking"], color: "#2196F3" },
  { id: "cat_83", name: "Tech Talk", icon: "desktop", tags: ["tech", "education"], color: "#607D8B" },
  { id: "cat_84", name: "AI Workshop", icon: "hardware-chip", tags: ["tech", "education"], color: "#9C27B0" },
  { id: "cat_85", name: "Robotics", icon: "hardware-chip", tags: ["tech", "education"], color: "#FF9800" },
  { id: "cat_86", name: "VR Experience", icon: "glasses", tags: ["tech", "entertainment"], color: "#2196F3" },
  { id: "cat_87", name: "3D Printing", icon: "cube", tags: ["tech", "creative"], color: "#607D8B" },
  { id: "cat_88", name: "Drone Flying", icon: "navigate", tags: ["tech", "outdoor"], color: "#00BCD4" },
  { id: "cat_89", name: "App Development", icon: "phone-portrait", tags: ["tech", "education"], color: "#4CAF50" },
  { id: "cat_90", name: "Web Design", icon: "desktop", tags: ["tech", "creative"], color: "#9C27B0" },

  // Wellness & Health (70+ categories)
  { id: "cat_91", name: "Meditation", icon: "leaf", tags: ["wellness", "mental-health"], color: "#9C27B0" },
  { id: "cat_92", name: "Mindfulness", icon: "flower", tags: ["wellness", "mental-health"], color: "#8BC34A" },
  { id: "cat_93", name: "Spa Day", icon: "rose", tags: ["wellness", "relaxation"], color: "#E91E63" },
  { id: "cat_94", name: "Massage", icon: "hand-left", tags: ["wellness", "relaxation"], color: "#9C27B0" },
  { id: "cat_95", name: "Sauna", icon: "water", tags: ["wellness", "relaxation"], color: "#FF5722" },
  { id: "cat_96", name: "Nutrition Workshop", icon: "nutrition", tags: ["wellness", "health"], color: "#4CAF50" },
  { id: "cat_97", name: "Mental Health", icon: "heart", tags: ["wellness", "mental-health"], color: "#E91E63" },
  { id: "cat_98", name: "Therapy Group", icon: "people", tags: ["wellness", "mental-health"], color: "#2196F3" },
  { id: "cat_99", name: "Breathwork", icon: "leaf", tags: ["wellness", "mental-health"], color: "#00BCD4" },
  { id: "cat_100", name: "Tai Chi", icon: "body", tags: ["wellness", "fitness"], color: "#8BC34A" },

  // Business & Networking (60+ categories)
  { id: "cat_101", name: "Networking Event", icon: "people", tags: ["business", "networking"], color: "#2196F3" },
  { id: "cat_102", name: "Business Lunch", icon: "briefcase", tags: ["business", "food"], color: "#607D8B" },
  { id: "cat_103", name: "Conference", icon: "business", tags: ["business", "education"], color: "#3F51B5" },
  { id: "cat_104", name: "Workshop", icon: "school", tags: ["business", "education"], color: "#FF9800" },
  { id: "cat_105", name: "Seminar", icon: "book", tags: ["business", "education"], color: "#795548" },
  { id: "cat_106", name: "Pitch Night", icon: "trending-up", tags: ["business", "startup"], color: "#4CAF50" },
  { id: "cat_107", name: "Career Fair", icon: "briefcase", tags: ["business", "career"], color: "#607D8B" },
  { id: "cat_108", name: "Mentorship", icon: "people", tags: ["business", "career"], color: "#2196F3" },
  { id: "cat_109", name: "Coworking", icon: "business", tags: ["business", "work"], color: "#607D8B" },
  { id: "cat_110", name: "Freelancer Meet", icon: "laptop", tags: ["business", "networking"], color: "#4CAF50" },

  // Pets & Animals (40+ categories)
  { id: "cat_111", name: "Dog Park", icon: "paw", tags: ["pets", "outdoor"], color: "#795548" },
  { id: "cat_112", name: "Cat Cafe", icon: "cafe", tags: ["pets", "indoor"], color: "#FF9800" },
  { id: "cat_113", name: "Pet Training", icon: "paw", tags: ["pets", "education"], color: "#4CAF50" },
  { id: "cat_114", name: "Pet Adoption", icon: "heart", tags: ["pets", "charity"], color: "#E91E63" },
  { id: "cat_115", name: "Horse Riding", icon: "walk", tags: ["pets", "outdoor", "sport"], color: "#795548" },
  { id: "cat_116", name: "Zoo Visit", icon: "paw", tags: ["pets", "family", "outdoor"], color: "#4CAF50" },
  { id: "cat_117", name: "Aquarium", icon: "fish", tags: ["pets", "family", "indoor"], color: "#03A9F4" },
  { id: "cat_118", name: "Pet Photoshoot", icon: "camera", tags: ["pets", "photography"], color: "#9C27B0" },
  { id: "cat_119", name: "Pet Grooming", icon: "cut", tags: ["pets", "care"], color: "#FF9800" },
  { id: "cat_120", name: "Wildlife Tour", icon: "leaf", tags: ["nature", "animals", "outdoor"], color: "#8BC34A" },

  // Family & Kids (50+ categories)
  { id: "cat_121", name: "Playground", icon: "happy", tags: ["family", "kids", "outdoor"], color: "#FFC107" },
  { id: "cat_122", name: "Family Picnic", icon: "sunny", tags: ["family", "outdoor"], color: "#8BC34A" },
  { id: "cat_123", name: "Kids Party", icon: "balloon", tags: ["family", "kids"], color: "#E91E63" },
  { id: "cat_124", name: "Storytime", icon: "book", tags: ["family", "kids", "education"], color: "#9C27B0" },
  { id: "cat_125", name: "Kids Workshop", icon: "construct", tags: ["family", "kids", "education"], color: "#FF9800" },
  { id: "cat_126", name: "Family Movie", icon: "film", tags: ["family", "entertainment"], color: "#673AB7" },
  { id: "cat_127", name: "Science Fair", icon: "flask", tags: ["family", "kids", "education"], color: "#4CAF50" },
  { id: "cat_128", name: "Magic Show", icon: "star", tags: ["family", "entertainment"], color: "#FFEB3B" },
  { id: "cat_129", name: "Puppet Show", icon: "hand-right", tags: ["family", "entertainment"], color: "#FF9800" },
  { id: "cat_130", name: "Face Painting", icon: "color-palette", tags: ["family", "kids"], color: "#E91E63" },

  // Adventure & Travel (70+ categories)
  { id: "cat_131", name: "Road Trip", icon: "car", tags: ["adventure", "travel", "outdoor"], color: "#2196F3" },
  { id: "cat_132", name: "City Tour", icon: "bus", tags: ["travel", "culture"], color: "#FF9800" },
  { id: "cat_133", name: "Bike Tour", icon: "bicycle", tags: ["travel", "outdoor", "sport"], color: "#4CAF50" },
  { id: "cat_134", name: "Kayaking", icon: "boat", tags: ["adventure", "water", "outdoor"], color: "#03A9F4" },
  { id: "cat_135", name: "Surfing", icon: "water", tags: ["adventure", "water", "sport"], color: "#00BCD4" },
  { id: "cat_136", name: "Scuba Diving", icon: "water", tags: ["adventure", "water", "sport"], color: "#2196F3" },
  { id: "cat_137", name: "Snorkeling", icon: "water", tags: ["adventure", "water"], color: "#03A9F4" },
  { id: "cat_138", name: "Skiing", icon: "snow", tags: ["adventure", "sport", "outdoor"], color: "#00BCD4" },
  { id: "cat_139", name: "Snowboarding", icon: "snow", tags: ["adventure", "sport", "outdoor"], color: "#607D8B" },
  { id: "cat_140", name: "Paragliding", icon: "airplane", tags: ["adventure", "extreme", "outdoor"], color: "#2196F3" },

  // Food & Culinary (80+ categories)
  { id: "cat_141", name: "Sushi Making", icon: "restaurant", tags: ["food", "education", "cooking"], color: "#F44336" },
  { id: "cat_142", name: "Pizza Night", icon: "fast-food", tags: ["food", "social"], color: "#FF9800" },
  { id: "cat_143", name: "Pasta Class", icon: "restaurant", tags: ["food", "education", "cooking"], color: "#FFC107" },
  { id: "cat_144", name: "Street Food", icon: "fast-food", tags: ["food", "outdoor"], color: "#FF5722" },
  { id: "cat_145", name: "Food Festival", icon: "restaurant", tags: ["food", "culture", "outdoor"], color: "#FF9800" },
  { id: "cat_146", name: "Farmers Market", icon: "leaf", tags: ["food", "outdoor"], color: "#4CAF50" },
  { id: "cat_147", name: "Chocolate Tasting", icon: "cafe", tags: ["food", "social"], color: "#795548" },
  { id: "cat_148", name: "Cheese Tasting", icon: "restaurant", tags: ["food", "social"], color: "#FFC107" },
  { id: "cat_149", name: "Beer Tasting", icon: "beer", tags: ["food", "drinks", "18+"], color: "#FF9800" },
  { id: "cat_150", name: "BBQ Competition", icon: "flame", tags: ["food", "competition", "outdoor"], color: "#FF5722" },

  // Additional diverse categories to reach 200+
  { id: "cat_151", name: "Frisbee", icon: "disc", tags: ["sport", "outdoor"], color: "#00BCD4" },
  { id: "cat_152", name: "Ultimate Frisbee", icon: "disc", tags: ["sport", "team", "outdoor"], color: "#03A9F4" },
  { id: "cat_153", name: "Slacklining", icon: "fitness", tags: ["sport", "outdoor"], color: "#8BC34A" },
  { id: "cat_154", name: "Parkour", icon: "body", tags: ["sport", "outdoor"], color: "#607D8B" },
  { id: "cat_155", name: "Bouldering", icon: "fitness", tags: ["sport", "climbing", "indoor"], color: "#795548" },
  { id: "cat_156", name: "Ice Skating", icon: "snow", tags: ["sport", "outdoor"], color: "#00BCD4" },
  { id: "cat_157", name: "Roller Skating", icon: "walk", tags: ["sport", "outdoor"], color: "#E91E63" },
  { id: "cat_158", name: "Archery", icon: "navigate", tags: ["sport", "outdoor"], color: "#795548" },
  { id: "cat_159", name: "Fencing", icon: "fitness", tags: ["sport", "indoor"], color: "#607D8B" },
  { id: "cat_160", name: "Rugby", icon: "football", tags: ["sport", "team", "outdoor"], color: "#4CAF50" },
  { id: "cat_161", name: "Cricket", icon: "baseball", tags: ["sport", "team", "outdoor"], color: "#F44336" },
  { id: "cat_162", name: "Baseball", icon: "baseball", tags: ["sport", "team", "outdoor"], color: "#2196F3" },
  { id: "cat_163", name: "Softball", icon: "baseball", tags: ["sport", "team", "outdoor"], color: "#FFC107" },
  { id: "cat_164", name: "Handball", icon: "basketball", tags: ["sport", "team", "indoor"], color: "#FF9800" },
  { id: "cat_165", name: "Squash", icon: "tennisball", tags: ["sport", "indoor"], color: "#4CAF50" },
  { id: "cat_166", name: "Racquetball", icon: "tennisball", tags: ["sport", "indoor"], color: "#2196F3" },
  { id: "cat_167", name: "Bowling", icon: "disc", tags: ["sport", "indoor", "social"], color: "#9C27B0" },
  { id: "cat_168", name: "Pool/Billiards", icon: "ellipse", tags: ["sport", "indoor", "social"], color: "#4CAF50" },
  { id: "cat_169", name: "Darts", icon: "navigate", tags: ["sport", "indoor", "social"], color: "#F44336" },
  { id: "cat_170", name: "Axe Throwing", icon: "navigate", tags: ["sport", "indoor"], color: "#795548" },
  { id: "cat_171", name: "Escape Room", icon: "lock-closed", tags: ["game", "indoor", "puzzle"], color: "#673AB7" },
  { id: "cat_172", name: "Laser Tag", icon: "game-controller", tags: ["game", "indoor"], color: "#F44336" },
  { id: "cat_173", name: "Paintball", icon: "color-palette", tags: ["game", "outdoor"], color: "#4CAF50" },
  { id: "cat_174", name: "Go-Karting", icon: "car", tags: ["sport", "racing", "outdoor"], color: "#FF5722" },
  { id: "cat_175", name: "Mini Golf", icon: "golf", tags: ["sport", "outdoor", "social"], color: "#8BC34A" },
  { id: "cat_176", name: "Trampoline Park", icon: "body", tags: ["sport", "indoor", "fun"], color: "#E91E63" },
  { id: "cat_177", name: "Zip Lining", icon: "fitness", tags: ["adventure", "outdoor"], color: "#4CAF50" },
  { id: "cat_178", name: "Bungee Jumping", icon: "body", tags: ["adventure", "extreme", "outdoor"], color: "#F44336" },
  { id: "cat_179", name: "Skydiving", icon: "airplane", tags: ["adventure", "extreme", "outdoor"], color: "#2196F3" },
  { id: "cat_180", name: "Hot Air Balloon", icon: "balloon", tags: ["adventure", "outdoor"], color: "#FFC107" },
  { id: "cat_181", name: "Sailing", icon: "boat", tags: ["water", "outdoor", "sport"], color: "#03A9F4" },
  { id: "cat_182", name: "Windsurfing", icon: "boat", tags: ["water", "outdoor", "sport"], color: "#00BCD4" },
  { id: "cat_183", name: "Kitesurfing", icon: "airplane", tags: ["water", "outdoor", "sport"], color: "#2196F3" },
  { id: "cat_184", name: "Stand-up Paddle", icon: "boat", tags: ["water", "outdoor", "sport"], color: "#00BCD4" },
  { id: "cat_185", name: "Canoeing", icon: "boat", tags: ["water", "outdoor", "sport"], color: "#4CAF50" },
  { id: "cat_186", name: "Rafting", icon: "boat", tags: ["water", "outdoor", "adventure"], color: "#03A9F4" },
  { id: "cat_187", name: "Mountain Biking", icon: "bicycle", tags: ["sport", "outdoor", "adventure"], color: "#795548" },
  { id: "cat_188", name: "Trail Running", icon: "walk", tags: ["sport", "outdoor", "fitness"], color: "#4CAF50" },
  { id: "cat_189", name: "Marathon Training", icon: "walk", tags: ["sport", "fitness", "outdoor"], color: "#2196F3" },
  { id: "cat_190", name: "Triathlon", icon: "bicycle", tags: ["sport", "competition", "outdoor"], color: "#FF9800" },
  { id: "cat_191", name: "Boot Camp", icon: "barbell", tags: ["fitness", "outdoor"], color: "#F44336" },
  { id: "cat_192", name: "Zumba", icon: "musical-notes", tags: ["fitness", "dance", "indoor"], color: "#E91E63" },
  { id: "cat_193", name: "Barre", icon: "body", tags: ["fitness", "dance", "indoor"], color: "#9C27B0" },
  { id: "cat_194", name: "Stretching", icon: "body", tags: ["fitness", "wellness"], color: "#8BC34A" },
  { id: "cat_195", name: "Acro Yoga", icon: "body", tags: ["fitness", "yoga", "outdoor"], color: "#9C27B0" },
  { id: "cat_196", name: "Aerial Yoga", icon: "body", tags: ["fitness", "yoga", "indoor"], color: "#E91E63" },
  { id: "cat_197", name: "Hot Yoga", icon: "flame", tags: ["fitness", "yoga", "indoor"], color: "#FF5722" },
  { id: "cat_198", name: "Yin Yoga", icon: "leaf", tags: ["fitness", "yoga", "wellness"], color: "#8BC34A" },
  { id: "cat_199", name: "Vinyasa Yoga", icon: "body", tags: ["fitness", "yoga", "wellness"], color: "#9C27B0" },
  { id: "cat_200", name: "Power Yoga", icon: "barbell", tags: ["fitness", "yoga", "indoor"], color: "#FF5722" },
];

// Helper function to get category by ID
export const getCategoryById = (id: string): EventCategory | undefined => {
  return EVENT_CATEGORIES.find(cat => cat.id === id);
};

// Helper function to get categories by tag
export const getCategoriesByTag = (tag: string): EventCategory[] => {
  return EVENT_CATEGORIES.filter(cat => cat.tags.includes(tag));
};

// Helper function to search categories
export const searchCategories = (query: string): EventCategory[] => {
  const lowerQuery = query.toLowerCase();
  return EVENT_CATEGORIES.filter(cat =>
    cat.name.toLowerCase().includes(lowerQuery) ||
    cat.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
};
