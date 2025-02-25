import  Habit from '../components/types/Habit';

const habits : Habit[] = [
  {
    id: 1,
    title: "Morning Run",
    description: "Go for a 30-minute run",
    type: "Fitness",
    isCompleted: false,
    occurrence: "monthly",
    targetCount: 1,
    currentCount: 0,  
    currentStreak: 0
  },
  {
    id: 2,
    title: "Read Book",
    description: "Read for at least 20 minutes",
    type: "Personal Development",
    isCompleted: false,
    occurrence: "monthly",
    targetCount: 1,
    currentCount: 0,  
    currentStreak: 0
  },
  {
    id: 3,
    title: "Meditation",
    description: "Meditate for 10 minutes",
    type: "Wellness",
    isCompleted: false,
    occurrence: "weekly",
    targetCount: 1,
    currentCount: 0,  
    currentStreak: 0
  },
  {
    id: 4,
    title: "Healthy Breakfast",
    description: "Eat a balanced breakfast",
    type: "Health",
    isCompleted: false,
    occurrence: "weekly",
    targetCount: 5,
    currentCount: 0,  
    currentStreak: 0
  },
  {
    id: 5,
    title: "Write Journal",
    description: "Write in the journal for 15 minutes",
    type: "Personal Development",
    isCompleted: false,
    occurrence: "weekly",
    targetCount: 3,
    currentCount: 0,  
    currentStreak: 0
  }
];

export default habits;

  