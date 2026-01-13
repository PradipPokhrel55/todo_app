import React from 'react';
import { Calendar } from 'react-native-calendars';

type Props = {
  completedDates: string[];
};

export default function StreakCalendar({ completedDates }: Props) {
  const markedDates = completedDates.reduce((acc, date) => {
    acc[date] = {
      selected: true,
      selectedColor: '#22c55e', // green
    };
    return acc;
  }, {} as any);

  return (
    <Calendar
      markedDates={markedDates}
      theme={{
        todayTextColor: '#2563eb',
        arrowColor: '#2563eb',
      }}
    />
  );
}
