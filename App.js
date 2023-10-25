import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
// import { LoginScreen } from "./src/Screens/LoginScreen.js";
import { RegistrationScreen } from "./src/Screens/RegistrationScreen.js";
// import { PostsScreen } from "./src/Screens/PostsScreen.js";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* <LoginScreen /> */}
      <RegistrationScreen />
      {/* <PostsScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
