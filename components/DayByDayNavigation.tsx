import { View, Text } from "react-native";

const DayByDayNavigation = () => {
    return (
        <View className="flex flex-row items-center justify-around w-full bg-white rounded-b-xl my-2">
            {['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'].map((day, index) => (
                <View key={index}>
                    <Text>{day}</Text>
                </View>
            ))}
        </View>
    )
};

export default DayByDayNavigation;