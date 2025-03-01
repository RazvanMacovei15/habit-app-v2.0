import { useState } from "react";
import { useFilterMonth } from "./contexts/FilterMonthContext";
import { Dropdown } from "react-native-element-dropdown";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Dimensions } from "react-native";
import { set } from "date-fns";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const MONTHS = [
  { label: "January", value: 1 },
  { label: "February", value: 2 },
  { label: "March", value: 3 },
  { label: "April", value: 4 },
  { label: "May", value: 5 },
  { label: "June", value: 6 },
  { label: "July", value: 7 },
  { label: "August", value: 8 },
  { label: "September", value: 9 },
  { label: "October", value: 10 },
  { label: "November", value: 11 },
  { label: "December", value: 12 },
];

const DropdownFilter = () => {
  const { month, setMonth } = useFilterMonth();
  const selectedMonth = MONTHS[month].value;
  const [selectedOption, setSelectedOption] = useState(selectedMonth);

  return (
    <Dropdown
      onChange={(selectedOption) => {
        setSelectedOption(selectedOption.value);
        setMonth(selectedOption.value - 1);
      }}
      data={MONTHS}
      labelField="label"
      valueField="value"
      value={selectedOption}
      style={{
        width: SCREEN_WIDTH / 3,
      }}
      selectedTextStyle={{ textAlign: "right", paddingRight: 10 }}
      containerStyle={{ width: SCREEN_WIDTH / 3, height: 500, padding: 5 }}
      dropdownPosition="bottom"
      renderRightIcon={() => (
        <MaterialCommunityIcons
          name="format-list-checkbox"
          size={24}
          color="black"
        />
      )}
      maxHeight={SCREEN_HEIGHT * 2}
    />
  );
};

export default DropdownFilter;
