import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack 
    screenOptions={{
      headerStyle:{
        backgroundColor: "#ff8c00",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
      },
      contentStyle:{
        // paddingTop: 20,
        // paddingHorizontal: 10,
        // backgroundColor: "#FFF",
      },
    }}
    >
      <Stack.Screen name="index" options={{
        title: "Home"
      }} />
      <Stack.Screen name="notes" options={{
        headerTitle: "Notes "
      }} />
    </Stack>
}
