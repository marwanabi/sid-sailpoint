// Quiz data
const stages = [
    { id: 1, name: "Ancient Castle", icon: "", unlocked: true, completed: false },
    { id: 2, name: "Mystic Forest", icon: "", unlocked: false, completed: false },
    { id: 3, name: "Crystal Cave", icon: "", unlocked: false, completed: false },
    { id: 4, name: "Dragon's Lair", icon: "", unlocked: false, completed: false },
    { id: 5, name: "Floating Islands", icon: "", unlocked: false, completed: false },
    { id: 6, name: "Phoenix Temple", icon: "", unlocked: false, completed: false },
    { id: 7, name: "Golden Treasure", icon: "", unlocked: false, completed: false },
];

const questions = [
    {
        id: 1,
        stage: 1,
        scenario: "You approach the ancient castle's towering gates. The stone walls are covered in mysterious runes that seem to glow faintly in the moonlight. A riddle is carved into the entrance.",
        question: "What does the ancient rune at the castle entrance represent?",
        options: ["Protection", "Wisdom", "Courage", "Knowledge"],
        correctAnswer: 0
    },
    {
        id: 2,
        stage: 2,
        scenario: "Deep within the mystic forest, talking animals guide your path. The trees whisper secrets of old magic, and you encounter a wise owl perched on a branch of silver leaves.",
        question: "What lesson does the wise owl teach in the mystic forest?",
        options: ["Fear is an illusion", "Trust your instincts", "Knowledge comes from listening", "Magic is everywhere"],
        correctAnswer: 2
    },
    {
        id: 3,
        stage: 3,
        scenario: "The crystal cave sparkles with gems of every color. Each crystal resonates with a different frequency, creating a harmonious melody that echoes through the cavern.",
        question: "Which crystal holds the power of clarity and focus?",
        options: ["Ruby", "Sapphire", "Emerald", "Diamond"],
        correctAnswer: 3
    },
    {
        id: 4,
        stage: 4,
        scenario: "In the dragon's lair, ancient treasures are guarded by a wise old dragon. The dragon challenges you not with fire, but with a test of character and honor.",
        question: "What quality does the dragon value most?",
        options: ["Bravery", "Honesty", "Intelligence", "Strength"],
        correctAnswer: 1
    },
    {
        id: 5,
        stage: 5,
        scenario: "Among the floating islands, you must navigate through clouds and mist. Each island holds a piece of an ancient puzzle that reveals the secrets of levitation.",
        question: "What enables the islands to float in the sky?",
        options: ["Magic crystals", "Ancient technology", "Pure belief", "Harmony with nature"],
        correctAnswer: 3
    },
    {
        id: 6,
        stage: 6,
        scenario: "The Phoenix Temple burns with eternal flames that never consume. Here, the Phoenix teaches about transformation, renewal, and the power of rising from ashes.",
        question: "What is the Phoenix's greatest teaching?",
        options: ["Power through fire", "Rebirth through challenge", "Immortality through wisdom", "Strength through solitude"],
        correctAnswer: 1
    },
    {
        id: 7,
        stage: 7,
        scenario: "At the final destination, the Golden Treasure awaits. But the real treasure isn't gold or jewels - it's the wisdom and growth you've gained throughout your journey.",
        question: "What is the true treasure of the adventure?",
        options: ["Golden coins", "Magical artifacts", "Personal growth", "Fame and glory"],
        correctAnswer: 2
    }
];

const quizResults = [
    {
        title: "Novice Adventurer",
        description: "You've taken your first steps into the world of adventure! Every expert was once a beginner.",
        icon: "🌱",
        minScore: 0,
        maxScore: 1
    },
    {
        title: "Apprentice Explorer",
        description: "You show promise and curiosity! Continue learning and exploring to unlock your potential.",
        icon: "🗺️",
        minScore: 2,
        maxScore: 3
    },
    {
        title: "Skilled Questor",
        description: "Your wisdom and intuition guide you well. You understand the deeper meanings of your journey.",
        icon: "⚔️",
        minScore: 4,
        maxScore: 5
    },
    {
        title: "Master Adventurer",
        description: "Exceptional! You possess great wisdom and insight. You see beyond the surface of challenges.",
        icon: "👑",
        minScore: 6,
        maxScore: 6
    },
    {
        title: "Legendary Hero",
        description: "Perfect! You are a true sage with complete understanding of the adventure's lessons.",
        icon: "🌟",
        minScore: 7,
        maxScore: 7
    }
];