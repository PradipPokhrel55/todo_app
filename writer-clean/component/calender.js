import React from 'react';
import { Calendar as RNCalendar } from 'react-native-calendars';

export default function Calendar({ completedDates = [] }) {
  const markedDates = completedDates.reduce((acc, date) => {
    acc[date] = {
      selected: true,
      selectedColor: '#22c55e',
    };
    return acc;
  }, {});

  return (
    <RNCalendar
      markedDates={markedDates}
      theme={{
        todayTextColor: '#2563eb',
        arrowColor: '#2563eb',
      }}
    />
  );
}
