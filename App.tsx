import React, { Component } from "react";
import { SafeAreaView, View, Alert, StatusBar } from "react-native";
import TimeTable from "@mikezzb/react-native-timetable";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <TimeTable
        disableTicker={!false}
        configs={{
          startHour: 7,
          endHour: 21,
          numOfDaysPerPage: 4,
          timeTicksWidth: 50,
        }}
        theme={{
          background: "#fff",
          accent: "##ff7b5f",
          text: "gray",
          primary: "#034c8c",
        }}
        headerStyle={{
          height: 50,
          alignItems: "center",
        }}
        contentContainerStyle={{
          // borderWidth: 1,
          backgroundColor: "#9d9",
        }}
        eventColors={["pink", "coral", "green"]}
        events={[
          {
            title: "Enzo Gutierrez",
            courseId: "Enzo Gutierrez",
            section: "A - LEC",
            day: 1,
            startTime: "08:00",
            endTime: "16:15",
            location: "Winter Garden",
            // color: "red",
          },
          {
            title: "Santiago Wasmosy",
            courseId: "Santiago Wasmosy",
            section: "A - LEC",
            day: 2,
            startTime: "14:30",
            endTime: "16:15",
            location: "Winter Garden",
            // color: "red",
          },
          {
            title: "Orlando Zelada",
            courseId: "Orlando Zelada",
            section: "A - LCSA",
            day: 3,
            startTime: "11:30",
            endTime: "13:15",
            location: "Winter Garden",
            // color: "purple",
          },
          {
            title: "Enzo Gutierrez",
            courseId: "Enzo Gutierrez",
            section: "A - LEC",
            day: 4,
            startTime: "08:00",
            endTime: "16:15",
            location: "Winter Garden",
            // color: "red",
          },
          {
            title: "Santiago Wasmosy",
            courseId: "Santiago Wasmosy",
            section: "A - LEC",
            day: 5,
            startTime: "14:30",
            endTime: "16:15",
            location: "Winter Garden",
            // color: "red",
          },
          {
            title: "Orlando Zelada",
            courseId: "Orlando Zelada",
            section: "A - LCSA",
            day: 6,
            startTime: "08:30",
            endTime: "11:15",
            location: "Winter Garden",
            // color: "purple",
          },
        ]}
        eventOnPress={(event) =>
          Alert.alert("Name of client", "08:30 to 12:30", [
            {
              text: "Close",
              onPress: () => {},
              style: "cancel",
            },
            {
              text: "Open book",
              onPress: () => {},
              style: "cancel",
            },
          ])
        }
      />
    </SafeAreaView>
  );
}
