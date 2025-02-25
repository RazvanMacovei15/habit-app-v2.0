type Habit = {
    id: number;
    title: string;
    description: string;
    type: string; // single || multiple 
    isCompleted: boolean;
    occurrence: string; // daily || weekly || monthly
    targetCount: number;
    currentCount: number;
    currentStreak: number;
}

export default Habit;