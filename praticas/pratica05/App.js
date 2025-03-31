import { SafeAreaProvider } from "react-native-safe-area-context";
import LoginScreens from "./screens/LoginScreens";
import ChatScreens from "./screens/ChatScreens";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";

function App () {
  return (
    <SafeAreaProvider>
      <SettingsScreen/>
    </SafeAreaProvider>
  );
}

export default App;